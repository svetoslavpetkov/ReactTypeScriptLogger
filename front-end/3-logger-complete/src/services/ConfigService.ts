import { IAppConfig, IConfigService, IServiceLocator } from "./abstraction";
import data from "../config.json"
import { BaseService } from "./BaseService";

export class ConfigService extends BaseService implements IConfigService {

  constructor(serviceLocator: IServiceLocator) {
    super(serviceLocator)
    this.appConfig = data.appConfig;    
  }


  private appConfig: IAppConfig;

  getAppConfig = () => this.appConfig;

}