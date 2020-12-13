import { Button, Paper } from "@material-ui/core";
import React, { useState } from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { AppService, IComment, IIssue, IIssueService, IIssueWithActions, IssueStatus } from "../../../services/abstraction"
import { AppServiceContext } from "../../AppContext";
import { Loader } from "../../shared/Loader"
import { IssueItem } from "./IssueItem"

import "./ViewSingIeIssue.css"

interface IViewSingIeIssue {
  issueIsLoading: boolean
  issue: IIssueWithActions
  commentsAreLoading: boolean
  comments: Array<IComment>
}

interface IViewSingIeIssueProps extends RouteComponentProps { }

export class ViewSingIeIssue extends React.Component<IViewSingIeIssueProps, IViewSingIeIssue> {

  static contextType = AppServiceContext;
  context!: React.ContextType<typeof AppServiceContext>;

  constructor(props: IViewSingIeIssueProps) {
    super(props)
    this.state = {
      issueIsLoading: true,
      issue: { transitionStatuses: [], createdDate: new Date(), creator: "", description: "", id: "",responsible: "", status: IssueStatus.New, title: ""  }    ,
      commentsAreLoading: true,
      comments: []
    }
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
          { !this.state.issueIsLoading && this.renderActions()}
        </div>
      </div>
      <div>
        <h3>Comments</h3>
        { this.state.commentsAreLoading && <Loader text="Loading comments" />}
        { !this.state.commentsAreLoading && this.renderComments() }
      </div>
    </div>
    )
  }

  async loadIssue() {
    this.setState({ issueIsLoading: true })
    try {
      const { id } = this.props.match.params as any;
      this.context.get<IIssueService>(AppService.IssueService).getIssue(id)    
    } catch (e) {
      console.error("Error loading issue", e)
    } finally {
      this.setState({ issueIsLoading: false })
    }    
  }

  async loadComments() {
    this.setState({ commentsAreLoading: true })
    try {
      const { id } = this.props.match.params as any;
      const comments = await this.context.get<IIssueService>(AppService.IssueService).getComments(id);
      console.log("comments", comments)
      this.setState({ comments })
    } catch (e) {
      console.error("Error loading comments", e)
    } finally {
      this.setState({ commentsAreLoading: false })
    }        
  }

  async changeIssueState(state: IssueStatus) {

  }



  renderActions() {
    return (
      <div>
        { this.state.issue.transitionStatuses.map(state => {
          <div>
            <Button color="primary" variant="outlined" onClick={() => this.changeIssueState(state)}>
              Set issue to {" " + state}
            </Button>
          </div>
        }) }
      </div>)
  }


  renderComments() {
    if (this.state.comments.length === 0) {
      return (<h4>No comments</h4>)
    }

    console.log("renderComments", this.state.comments);

    return this.state.comments.map(c => (
      <Paper className="comment">
        <div> <b>from:</b> <span>{ " " + c.creator }</span> </div>
        <div> <b>at:</b> <span>{ " " + c.createdDate.toString() }</span> </div>
        <div className="comment-text">
          {c.text}
        </div>
      </Paper>));
  }
}

export default withRouter(ViewSingIeIssue)