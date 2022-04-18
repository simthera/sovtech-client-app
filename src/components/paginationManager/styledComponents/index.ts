import styled from "styled-components";
import { calculateRem } from "../../../utils/helpers";

const StyledPaginationManager = styled.div`
  padding: ${calculateRem(10)};
  a {
    padding: ${calculateRem(10)};
    cursor: pointer;
    font-style: bold;
  }
  span {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.yellow};
    border-radius: ${calculateRem(10)};
    padding: ${calculateRem(5)};
    a {
      text-decoration: underline;
    }
  }
`;

export { StyledPaginationManager };
