import React, { useState } from "react"
import { AppService, IIssue, IIssueService } from "../../../services/abstraction"
import { AppServiceContext } from "../../AppContext";
import { Loader } from "../../shared/Loader"
import { IssueItem } from "./IssueItem"

import "./IssuesList.css"

interface IIssuesListState {
  issuesAreLoading: boolean
  issues: Array<IIssue>
}

interface IIssuesListProps {  
}

export class IssuesList extends React.Component<IIssuesListProps, IIssuesListState> {

  static contextType = AppServiceContext;
  context!: React.ContextType<typeof AppServiceContext>;

  constructor(props: IIssuesListProps) {
    super(props)
    this.state = {
      issuesAreLoading: true,
      issues: []
    }
  }

  componentDidMount() {
    this.loadIssues()
  }

  loadIssues() {
    this.context
      .get<IIssueService>(AppService.IssueService)
      .listIssues()
      .then(issues => {       
        this.setState({ issues, issuesAreLoading: false })        
      })
  }

  render() {
    return (<>
    {this.state.issuesAreLoading && <Loader text="Loading issues" />}
    <div className="issues-container">
      {!this.state.issuesAreLoading && this.state.issues.map(i => (
        <div className="issue" key={i.id}>
          <IssueItem showLinks  {...i} />
        </div>))}
    </div>
    </>
    )
  }
}
