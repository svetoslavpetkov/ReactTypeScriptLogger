import { FC, useState } from "react";

import React from "react"
import { Button, Input, Paper } from "@material-ui/core";

interface IAddCommentProps {
  visible: boolean
  onAddClick: (input: { text: string }) => void
  onCancelClick: () => void
}

export const AddComment: React.FC<IAddCommentProps> = (props: IAddCommentProps) => {
  const [text, setText] = useState("")
  if (!props.visible) {
    return null;
  }  

  const isValid = text.length > 5;

  return (
  <Paper className="add-comment">
    <h3>Add comment</h3>
    <div className="add-comment-input">
      <Input type="text" value={text} onChange={(ev) => setText(ev.target.value)} multiline rows={6} placeholder="Enter comment text .At least 5 characters" />
    </div>
    <div className="add-comment-actions">
      <Button color="primary" variant="outlined" disabled={!isValid} onClick={() => props.onAddClick({ text })}>
        Add comment
      </Button>
      <Button color="secondary" variant="outlined" onClick={props.onCancelClick}>
        Cancel
      </Button>
    </div>
  </Paper>)
}