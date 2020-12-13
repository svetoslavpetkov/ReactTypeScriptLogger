import { Button, Paper } from "@material-ui/core"
import React, { FC, useState } from "react"
import { Link } from "react-router-dom"
import { IIssue } from "../../../services/abstraction"
import { Loader } from "../../shared/Loader"
import "./IssueItem.css"


interface IIssueItemData extends IIssue {
  showLinks?: boolean
}

export const IssueItem : FC<IIssueItemData> = (props: IIssueItemData) => {
  return (
  <Paper className="issue-container">
    <h3>{props.title}</h3>
    <div> <b>Created</b> <span>{ props.createdDate.toString() }</span> </div>
    <div> <b>Created by</b> <span>{ props.creator }</span> </div>
    <div> <b>Status</b> <span>{ props.status }</span> </div>
    <div><b>Description</b></div>
    <div className="issue-description">
      {props.description}
    </div>
    { props.showLinks && <div><Link to={`/issue/${props.id}`}><Button color="primary" variant="contained" >Go to issue</Button></Link></div> }
  </Paper>)
}