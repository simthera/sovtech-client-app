/*
 *
 * CharactorsPage
 *
 */

import React, { FC, ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import Person from "../../models/person.model";
import OverviewCard from "../overviewCard";
import PaginationManager from "../paginationManager";
import {
  StyledCharactorsPage,
  StyledCharactoBanner,
  StyledPageWrapper,
} from "./styledComponents";
import CharactorBanner from "../../assets/star-wars-desktop-wallpaper.png";
import LoadingIndicator from "../../components/loadingIndicator";
import { PEOPLE_QUERY } from "../../graphQL/queries";

const CharactorsPage: FC<{
  currentPage: number;
  onLearnMore: Function;
  onSelectPage: Function;
}> = ({ currentPage, onLearnMore, onSelectPage }): ReactElement => {
  const { loading, data, error } = useQuery(PEOPLE_QUERY, {
    variables: { page: currentPage },
  });
  return (
    <StyledCharactorsPage>
      <StyledCharactoBanner src={CharactorBanner} alt="Star wars banner" />
      <StyledPageWrapper>
        {data && (
          <>
            {data.people.people.map((person: Person) => (
              <OverviewCard
                key={person.name}
                name={person.name}
                onLeanMore={onLearnMore}
              />
            ))}
            <PaginationManager
              numberOfPages={data.people.numberOfPages}
              currentPage={currentPage}
              onSelectPage={onSelectPage}
            />
          </>
        )}
        {error && <h2> Error retrieving Charactor/s</h2>}
        {loading && <LoadingIndicator />}
      </StyledPageWrapper>
    </StyledCharactorsPage>
  );
};

export default CharactorsPage;
