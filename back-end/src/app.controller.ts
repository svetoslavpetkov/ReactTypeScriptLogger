import { Body, Controller, Get, Headers, HttpCode, Param, Post, Req } from '@nestjs/common';
import { request, Request } from 'express';
import { AppService } from './app.service';
import { UserRole } from './persistence/abstraction';
import { PersistenceService } from './persistence/persistence.service';

interface IUserAuthRequest {
  username: string
  password: string
}

interface IUserToken {
  username: string,
  role: UserRole,
  signature: string
}

interface ILog {
  text: string;
  data?: string;
}

interface IAddCommentLog {
  text: string
}

@Controller()
export class AppController {
  constructor(private readonly persistence: PersistenceService) {}

  @Get()
  getHello(): string {
    return "hallo";
  }

  @Post("auth")
  @HttpCode(200)
  async postAuth(@Body() request: IUserAuthRequest) {
    const user = await this.persistence.getUser(request.username);
    if (request.password !== user.password) {
      throw Error("Invalid login attmpt")
    }
    return { username: user.username, role: user.role, signature: "hurray" }
  }

  @Get("issue")
  getIssues(@Headers("user-token") userTokenHeader) {
    const userToken: IUserToken = JSON.parse(userTokenHeader)
    return this.persistence.listIssues(userToken.username);
  }

  @Get("issue/:id")
  getIssue(@Headers("user-token") userTokenHeader, @Param("id") id: string) {
    const userToken: IUserToken = JSON.parse(userTokenHeader)
    
    return this.persistence.getIssue(id);
  }

  @Get("issue/:id/comments")
  async getIssueComments(@Headers("user-token") userTokenHeader, @Param("id") id: string) {
    const userToken: IUserToken = JSON.parse(userTokenHeader)
    
    const result = await this.persistence.getIssue(id);
    return result.comments;
  }

  @Post("issue/:id/comments")
  async addIssueComments(@Headers("user-token") userTokenHeader, @Param("id") id: string, @Body() input: IAddCommentLog) {
    const userToken: IUserToken = JSON.parse(userTokenHeader)
    
    const result = await this.persistence.addComment({ 
      issueId: id,
      text: input.text,
      username: userToken.username
    });
    return result;
  }

  @Post("log")
  postLog(@Body() request: ILog, @Headers("user-token") userTokenHeader) {
    const userToken: IUserToken = JSON.parse(userTokenHeader)
    console.log(`Log : ${JSON.stringify(request)}`)
  }

  @Post("logs")
  postLogs(@Body() request: Array<ILog>) {
    request.forEach(l => console.log(`Date ${(new Date()).toISOString()} Received ${request.length} logs`));
  }
}
