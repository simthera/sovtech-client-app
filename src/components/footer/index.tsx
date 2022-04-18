/*
*
* Footer
*
*/

import React, { FC, ReactElement } from "react";
import { StyledFooter } from './styledComponents';

const Footer: FC<{
  title: string;
}> = ({title}): ReactElement => {
  return <StyledFooter>
    <div>{title}</div>
  </StyledFooter>
}

export default Footer;
