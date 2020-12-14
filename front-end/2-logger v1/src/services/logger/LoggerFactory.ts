import { ILogger, ILoggerFactory } from "./abstraction";
import { Logger } from "./Logger";

export class LoggerFactory implements ILoggerFactory {
  create(name:string): ILogger {
    return new Logger()
  }
}