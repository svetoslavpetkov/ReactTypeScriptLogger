import { AppService, IConfigService, IServiceLocator } from "./abstraction";

export abstract class BaseService {

  serviceLocator: IServiceLocator

  constructor(serviceLocator: IServiceLocator) {
    this.serviceLocator = serviceLocator;
  }


}