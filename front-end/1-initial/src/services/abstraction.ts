export type ServiceConstructor = new (serviceLocator: IServiceLocator) => any

export interface IAppConfig { 
  backEndUrl: string
}

export interface IConfigService {
  getAppConfig: () => IAppConfig
}

export enum AppService {
  ConfigService = "ConfigService",
  UserService = "UserService",
  IssueService = "IssueService"
}

export interface IServiceLocator {
  get<T>(appService: AppService): T
  bind(appService: AppService, ctor: ServiceConstructor): void
}

// User models

export enum UserRole {
  Admin = "Admin",
  User = "User"
}

export interface IUserToken {
  username: string,
  role: UserRole,
  signature: string
}

export interface IUserService {
  getUserToken(): IUserToken
  login(username: string, password: string) : Promise<boolean>
}


// Issues model

export enum IssueStatus {
  New = 'New',
  InProgress = 'InProgress',
  Fixed = "Fixed",
  WontFix = "WontFix",
}

export interface ICreatedObject {
  creator: string;
  createdDate: Date;
}

export interface IComment extends ICreatedObject {
  id: string;
  text: string;
}

export interface IIssue extends ICreatedObject {
  id: string;
  status: IssueStatus;
  responsible: string;
  title: string;
  description: string;  
}

export interface IIssueWithActions extends IIssue {
  transitionStatuses: Array<IssueStatus> 
}



export interface IIssueService {

  listIssues(): Promise<Array<IIssue>>

  getIssue(id: string): Promise<IIssueWithActions>

  changeStatus(issueId: string, status: IssueStatus): Promise<void>

  getComments(issueId: string): Promise<Array<IComment>>

  addComment(input : {issueId: string, text: string}): Promise<void>
}