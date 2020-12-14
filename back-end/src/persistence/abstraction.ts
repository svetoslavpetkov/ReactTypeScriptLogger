export enum IssueStatus {
  New = 'New',
  InProgress = 'InProgress',
  Fixed = "Fixed",
  WontFix = "WontFix",
}

export enum UserRole {
  Admin = "Admin",
  User = "User"
}

export interface IUser {
  username: string
  password: string
  role: UserRole
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
  comments: Array<IComment>
}