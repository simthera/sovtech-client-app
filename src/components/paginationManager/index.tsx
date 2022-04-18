/*
 *
 * PaginationManager
 *
 */

import React, { FC, ReactElement, useState } from "react";
import { StyledPaginationManager } from "./styledComponents";

const PaginationManager: FC<{
  numberOfPages: number;
  currentPage: number;
  onSelectPage: Function;
}> = ({ numberOfPages, currentPage, onSelectPage }): ReactElement => {
  const [startingPage, setStartingPage] = useState(1);

  const handleNext = () => {
    onSelectPage(++currentPage);
  };
  const getPageNumerContent = (pages: number) => {
    let content = [];
    for (let i = 1; i <= pages; i++) {
      content.push(
        currentPage === i ? (
          <span key={i}>
            <a onClick={() => onSelectPage(i)}>{i}</a>
          </span>
        ) : (
          <a key={i} onClick={() => onSelectPage(i)}>
            {i}
          </a>
        )
      );
    }
    return content;
  };
  return (
    <StyledPaginationManager>
      {getPageNumerContent(numberOfPages)}
      {numberOfPages !== currentPage && (
        <span onClick={() => handleNext()}>Next</span>
      )}
    </StyledPaginationManager>
  );
};

export default PaginationManager;
