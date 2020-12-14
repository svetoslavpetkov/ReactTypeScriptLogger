import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid'
import { IIssue, IssueStatus, IUser } from './abstraction';
import { getUsers, getIssues } from "./data"
import { PromiseUtil } from './PromiseUtil';

@Injectable()
export class PersistenceService {

  users: Array<IUser> = getUsers()
  issues: Array<IIssue> = getIssues()

  getUser = (username: string): Promise<IUser> => PromiseUtil.return(this.users.find(u => u.username === username))

  listIssues = (username: string): Promise<Array<IIssue>> => PromiseUtil.return(this.issues.filter(i => i.creator === username || i.responsible === username))

  getIssue = (id: string) => PromiseUtil.return(this.issues.find(i => i.id === id))

  changeIssueStatus = (id: string, status: IssueStatus) => this.getIssue(id).then(i => i.status = status)

  async addComment (input: { issueId: string, username: string, text: string }): Promise<{ id: string }> {    
    await PromiseUtil.wait();
    const id = uuidV4();
    const issue = this.issues.find(i => i.id === input.issueId);
    issue.comments.push({ 
      id,
      createdDate: new Date(),
      creator: input.username,
      text: input.text
    })
    return { id }
  }

}
