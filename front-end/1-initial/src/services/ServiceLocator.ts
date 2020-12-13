import { Guard } from "../util/Guard";
import { AppService, IServiceLocator, ServiceConstructor } from "./abstraction";

export interface IDependencyMap {
  appService: AppService,
  ctor: ServiceConstructor,
  instance?: any
}

export class ServiceLocator implements IServiceLocator {

  static instance? :ServiceLocator;
  static getInstance(): IServiceLocator {
    if (ServiceLocator.instance) {
      return ServiceLocator.instance;
    } else {
      ServiceLocator.instance = new ServiceLocator();
      return ServiceLocator.instance;      
    }
  }

  private constructor() {    
    
  }

  services: Array<IDependencyMap> = [];

  get<T>(appService: AppService): T {
    const serviceMap = Guard.ensure(this.services.find(s => s.appService === appService), `Cannot resolve ${appService}, no mapping is found` );
    if(!serviceMap.instance) {
      serviceMap.instance = new serviceMap.ctor(this);      
    } 
    return serviceMap.instance as T;
  }

  bind(appService: AppService, ctor: ServiceConstructor) {
    let existingService = this.services.find(s => s.appService === appService);
    if(existingService) {
      existingService.ctor = ctor;
      existingService.instance = undefined;
    } else {
      this.services.push( { appService, ctor })
    }
  }

}