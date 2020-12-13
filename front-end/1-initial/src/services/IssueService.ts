import { AppService, IAppConfig, IComment, IIssue, IIssueService, IIssueWithActions, IServiceLocator, IssueStatus, IUserService, IUserToken, UserRole } from "./abstraction";
import data from "../config.json"
import { BaseApi } from "./api/BaseApi";
import { Guard } from "../util/Guard";

const actionMappings: { status: IssueStatus, targetStatuses: Array<IssueStatus> }[] = [
  { status: IssueStatus.New , targetStatuses: [ IssueStatus.InProgress, IssueStatus.Fixed, IssueStatus.WontFix] },
  { status: IssueStatus.InProgress , targetStatuses: [ IssueStatus.New, IssueStatus.Fixed, IssueStatus.WontFix] },
  { status: IssueStatus.Fixed , targetStatuses: [ IssueStatus.New ] },
  { status: IssueStatus.WontFix , targetStatuses: [ IssueStatus.New ] },
]

export class IssueService extends BaseApi implements IIssueService {

  listIssues(): Promise<IIssue[]> {
    return this.get("/issue")
  }

  async getIssue(id: string): Promise<IIssueWithActions> {
    const result =  await this.get<IIssue>(`/issue/${id}`);
    
    const userToken = this.serviceLocator.get<IUserService>(AppService.UserService).getUserToken();
    if(userToken.role === UserRole.User) {
      return { ...result, transitionStatuses: [] }
    } else {
      return { ...result, transitionStatuses: Guard.ensure(actionMappings.find(m => m.status === result.status), "aaaa").targetStatuses  }
    }

  }
  
  getComments(issueId: string): Promise<Array<IComment>> {
    return this.get(`/issue/${issueId}/comments`)
  }

  addComment(input : {issueId: string, text: string}) {
    return this.post(`/issue/${input.issueId}/comments`, { text: input.text })
  }
}