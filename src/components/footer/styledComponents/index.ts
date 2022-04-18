import styled from 'styled-components';
import { calculateRem } from '../../../utils/helpers';

const StyledFooter = styled.div`
  display: flex;
  position:absolute;
  bottom: 0;
  width: 100%;
  height: ${calculateRem(86)};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.yellow};
  div {
    margin:auto;
    padding:${calculateRem(10)};
    text-align: center;
  }
`;

export { StyledFooter };