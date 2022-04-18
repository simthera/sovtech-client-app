/*
 *
 * Header
 *
 */

import React, { FC, ReactElement } from "react";
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderLogoWrapper,
} from "./styledComponents";
import AppIcon from "../../assets/logo.svg";
import Logo from "../../assets/Star_Wars_logo.svg";

const Header: FC<{
  title: string;
  onGoHome: Function;
}> = ({ title, onGoHome }): ReactElement => {
  return (
    <StyledHeader>
      <StyledHeaderLogoWrapper>
        <div onClick={() => onGoHome()}>
          <StyledHeaderLogo src={Logo} alt="Star wars logo" />
        </div>
      </StyledHeaderLogoWrapper>
    </StyledHeader>
  );
};

export default Header;
