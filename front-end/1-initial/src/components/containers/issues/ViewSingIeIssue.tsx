import { Button, Paper } from "@material-ui/core";
import React, { useState } from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { AppService, IComment, IIssue, IIssueService, IIssueWithActions, IssueStatus } from "../../../services/abstraction"
import { AppServiceContext } from "../../AppContext";
import { Loader } from "../../shared/Loader"
import { AddComment } from "./AddComment";
import { IssueItem } from "./IssueItem"

import "./ViewSingIeIssue.css"

interface IViewSingIeIssue {
  issueIsLoading: boolean
  issue: IIssueWithActions
  commentsAreLoading: boolean
  comments: Array<IComment>
  actionIsExecuting: boolean
  addCommentVisible: boolean  
}

interface IViewSingIeIssueProps extends RouteComponentProps { }

export class ViewSingIeIssue extends React.Component<IViewSingIeIssueProps, IViewSingIeIssue> {

  static contextType = AppServiceContext;
  context!: React.ContextType<typeof AppServiceContext>;

  issueService: IIssueService;

  constructor(props: IViewSingIeIssueProps, context: React.ContextType<typeof AppServiceContext>) {
    super(props)

    this.issueService = context.get<IIssueService>(AppService.IssueService);

    this.state = {
      issueIsLoading: true,
      issue: { transitionStatuses: [], createdDate: new Date(), creator: "", description: "", id: "",responsible: "", status: IssueStatus.New, title: ""  }    ,
      commentsAreLoading: true,
      comments: [],
      actionIsExecuting: false,
      addCommentVisible: false
    }
  }

  getIssueId(): string {
    const { id } = this.props.match.params as any;
    return id;
  }

  async componentDidMount() {
    await this.loadIssue();
    await this.loadComments();
  }

  render() {
    return (<div className="single-issue-container">
      <div className="single-issue-main">
        <div className="issue-data">
          <h3>Issue data</h3>
          { this.state.issueIsLoading && <Loader text="Loading issue data" />}
          { !this.state.issueIsLoading && <IssueItem {...this.state.issue} />}
        </div>
        <div className="actions-container">
          <h3>Actions</h3>
          { this.state.issueIsLoading && <Loader text="Loading actions" />}
          { !this.state.issueIsLoading && this.renderActions(this.state.issue, this.state.actionIsExecuting)}
        </div>
      </div>
      <div>
        <h3>Comments</h3>
        <AddComment 
          visible={this.state.addCommentVisible}
          onAddClick={(input) => this.addComment(input.text)}
          onCancelClick={() => this.toggleAddComment(false)} />
        { this.state.commentsAreLoading && <Loader text="Loading comments" />}
        { !this.state.commentsAreLoading && this.renderComments() }
      </div>
    </div>
    )
  }

  async loadIssue() {
    this.setState({ issueIsLoading: true })
    try {      
      const issue = await this.issueService.getIssue(this.getIssueId());
      this.setState({ issue });
    } catch (e) {
      console.error("Error loading issue", e)
    } finally {
      this.setState({ issueIsLoading: false })
    }    
  }

  async loadComments() {
    this.setState({ commentsAreLoading: true })
    try {      
      const comments = await this.context.get<IIssueService>(AppService.IssueService).getComments(this.getIssueId());
      console.log("comments", comments)
      this.setState({ comments })
    } catch (e) {
      console.error("Error loading comments", e)
    } finally {
      this.setState({ commentsAreLoading: false })
    }        
  }

  toggleAddComment(isVisible: boolean) {
    this.setState({ addCommentVisible: isVisible })
  }

  async addComment(text: string) {
    this.setState({ commentsAreLoading: true, addCommentVisible: false });
    await this.issueService.addComment({ issueId: this.getIssueId(), text })
    await this.loadComments();
  }

  async changeIssueStatus(state: IssueStatus) {
    const { id } = this.props.match.params as any;
    this.setState({ actionIsExecuting: true });
    await this.issueService.changeStatus(id, state);
    this.setState({ actionIsExecuting: false });
    await this.loadIssue();
  }


  renderActions(issue: IIssueWithActions, actionIsExecuting: boolean) {    
    return (            
      <div className="actions-list">
        <div>
          <Link to="/issue">
            <Button color="secondary" variant="outlined">
              Go back
            </Button>            
          </Link> 
        </div>
        <div>          
          <Button color="primary" variant="outlined" onClick={() => this.toggleAddComment(true)} >
              Add comment
          </Button>  
        </div>
        <h3>Status changes</h3>
        { 
          issue.transitionStatuses.map(state => (
            <div>
              <Button disabled={actionIsExecuting} color="primary" variant="outlined" onClick={() => this.changeIssueStatus(state)}>
                Set issue to {" " + state}
              </Button>
            </div>
        )) }
      </div>
    )
  }


  renderComments() {
    if (this.state.comments.length === 0) {
      return (<h4>No comments</h4>)
    }    

    return this.state.comments.map(c => (
      <Paper key={c.id} className="comment">
        <div> <b>from:</b> <span>{ " " + c.creator }</span> </div>
        <div> <b>at:</b> <span>{ " " + c.createdDate.toString() }</span> </div>
        <div className="comment-text">
          {c.text}
        </div>
      </Paper>));
  }
}

export default withRouter(ViewSingIeIssue)