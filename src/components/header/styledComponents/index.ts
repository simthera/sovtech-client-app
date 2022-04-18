import styled from "styled-components";
import { calculateRem } from "../../../utils/helpers";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
`;

const StyledHeaderLogo = styled.img`
  width: ${calculateRem(90)};
  height: ${calculateRem(90)};
  padding: ${calculateRem(10)};
  margin: auto;
`;
const StyledHeaderLogoWrapper = styled.div`
  width: ${calculateRem(100)};
  height: ${calculateRem(100)};
  margin: auto;
`;
const StyledHeaderTitile = styled.h2`
  padding: ${calculateRem(10)};
  color: ${({ theme }) => theme.colors.white};
`;

export {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderTitile,
  StyledHeaderLogoWrapper,
};
