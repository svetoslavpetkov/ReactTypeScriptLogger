import { CircularProgress, Container } from "@material-ui/core"
import React, { FC } from "react"

export type LoaderProps = {
  text? : string
}

export const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  return (<Container >
      <CircularProgress />
      { props.text && <div>{props.text}</div>}
    </Container>
  )
}