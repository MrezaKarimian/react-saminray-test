import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Container } from "./Styled";

function Loading() {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}

export default Loading;
