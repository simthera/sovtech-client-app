/*
 *
 * LoadingIndicator
 *
 */

import React, { FC, ReactElement } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StyledLoadingIndicator } from "./styledComponents";

const LoadingIndicator: FC<{}> = (): ReactElement => {
  return (
    <StyledLoadingIndicator>
      <CircularProgress />
    </StyledLoadingIndicator>
  );
};

export default LoadingIndicator;
