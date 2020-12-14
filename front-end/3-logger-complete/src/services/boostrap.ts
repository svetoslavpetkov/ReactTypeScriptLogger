import { AppService, IServiceLocator } from "./abstraction";
import { ConfigService } from "./ConfigService";
import { IssueService } from "./IssueService";
import { LoggerFactory } from "./logger/LoggerFactory";
import { ServiceLocator } from "./ServiceLocator";
import { UserService } from "./UserService";

export const bootstrapServices = () : IServiceLocator => {
  const locator = ServiceLocator.getInstance();

  locator.bind(AppService.ConfigService, ConfigService)
  locator.bind(AppService.UserService, UserService)
  locator.bind(AppService.IssueService, IssueService)
  locator.bind(AppService.LoggerFactory, LoggerFactory)

  return locator;
}