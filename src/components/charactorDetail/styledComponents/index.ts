import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../../utils/constants";
import { calculateRem } from "../../../utils/helpers";

const StyledCharactorDetail = styled.div`
  height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  // padding: ${calculateRem(10)};
`;
const StyledCharactoBanner = styled.img`
  width: 100%;
  padding-botton: ${calculateRem(10)};
`;
const StyledCharactorInfoHeader = styled.div`
  // height: ${calculateRem(86)};
  padding: ${calculateRem(10)};
  width: 21%;
  margin: ${calculateRem(10)} auto;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
  display: flex;
`;
const StyledCharacterName = styled.div`
  text-align: center;
  width: 60%;
`;
const StyledCharAvatar = styled.div`
  padding: 0;
`;
const StyledCharactorInfo = styled.div``;
const StyledHomeworldInfo = styled.div``;
const StyledActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  .MuiButtonBase-root {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
const StyledCharactorInfoBlock = styled.div`
  width: 30%;
  display: flex;
  font-size: ${calculateRem(16)};
  span:first-child {
    font-weight: bold;
  }
  span {
    padding: ${calculateRem(5)};
    text-align: left;
    flex: 1;
  }
`;
const StyledHomeworldImage = styled.img`
  height: ${calculateRem(100)};
  width: ${calculateRem(100)};
`;
const StyledCharactorDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.yellow};
  width: 50%;
  padding: ${calculateRem(10)};
  margin: ${calculateRem(0)} auto;
`;

export {
  StyledCharactorDetail,
  StyledCharactorInfoHeader,
  StyledCharactorInfoBlock,
  StyledCharactorInfo,
  StyledHomeworldInfo,
  StyledHomeworldImage,
  StyledActions,
  StyledCharactoBanner,
  StyledCharacterName,
  StyledCharAvatar,
  StyledCharactorDetails,
};
