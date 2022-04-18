import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../../utils/constants";
import { calculateRem } from "../../../utils/helpers";

const StyledCharactorsPage = styled.div`
  height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
  overflow-y: auto;
  text-align: center;
`;
const StyledCharactoBanner = styled.img`
  width: 100%;
  padding-botton: ${calculateRem(10)};
`;
const StyledPageWrapper = styled.div`
  max-width: ${calculateRem(1200)};
  margin: 0 auto;
`;
export { StyledCharactorsPage, StyledCharactoBanner, StyledPageWrapper };
