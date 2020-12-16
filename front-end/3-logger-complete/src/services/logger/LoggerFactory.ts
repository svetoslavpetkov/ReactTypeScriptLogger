import { execSync } from "child_process";
import { Guard } from "../../util/Guard";
import { AppService, IAppenderConfig, IConfigService, IServiceLocator } from "../abstraction";
import { BaseService } from "../BaseService";
import { ILogger, ILoggerFactory } from "./abstraction";
import { ConsoleAppender } from "./appenders/ConsoleAppender";
import { RestAppender } from "./appenders/RestAppender";
import { Logger } from "./Logger";

export class LoggerFactory extends BaseService implements ILoggerFactory {

  instances: Array<{name: string, logger: ILogger}> = []

  constructor(serviceLocator: IServiceLocator) {
    super(serviceLocator);

    const configService = serviceLocator.get<IConfigService>(AppService.ConfigService);
    const config = configService.getAppConfig().logging;

    //Create appenders
    const appenders = config.appenders.map(a => ({ name: a.name, instance: this.getAppender(a) }));

    //Loggers
    this.instances = config.loggers.map(logger => {
      const loggerAppenders = logger
        .appenders
        .map(name => {
          const appender = Guard.ensure(appenders.find(a => a.name === name), `Cannot find appender for ${name}`);
          return appender.instance;
        })
      return { name: logger.name, logger: new Logger(loggerAppenders) }
    })

  }

  create(name:string): ILogger {

    let existing = this.instances.find(a => a.name === name);
    const nameSections = this.getModules(name)

    while(!existing && nameSections.length > 0) {
      const currentName = nameSections.join(".")
      existing = this.instances.find(a => a.name === currentName);
      nameSections.pop();
    }

    if(!existing) {
      const defaultLogger = Guard.ensure(this.instances.find(a => a.name === "default"), "No default logger provider");
      return defaultLogger.logger;
    } else {
      return existing.logger;
    }    
  }

  getModules(name: string): Array<string> {
    if (name.indexOf(".") < 0) {
      return [name]
    }

    const result = name.split(".");

    return result.filter(a => a.length > 0)
  }

  getAppender(config: IAppenderConfig) {
    if(config.type === "ConsoleAppender") {
      return new ConsoleAppender();
    } else if (config.type === "RestAppender") {
      return new RestAppender(this.serviceLocator, config.settings);
    } else {
      throw new Error(`Appender type ${config.type} is not supported`);
    }
  }


}