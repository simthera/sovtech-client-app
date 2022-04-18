/*
 *
 * Home
 *
 */

import React, { FC, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Helmet } from "react-helmet";
import Header from "../../components/header";
import { PAGE_TITLE_HOME, FOOTER_TEXT } from "../../utils/constants";
import CharactorsPage from "../../components/charactorsPage";
import {
  searchText as searchTextAtom,
  selectedPage as selectedPageAtom,
} from "../../atoms/atoms";

const Home: FC<{}> = (): ReactElement => {
  const [userSelectedPage, setUserSelectedPage] =
    useRecoilState(selectedPageAtom);
  const [userSearchText, setUserSearchText] = useRecoilState(searchTextAtom);

  const history = useHistory();

  const handleLearnMore = (name: string) => {
    setUserSearchText(name);
    history.push("/charactor/details");
  };
  const handleGoHome = () => {
    history.push("/");
  };
  const handleSelectPage = (pageNumber: number) => {
    setUserSelectedPage(pageNumber);
  };
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Header title={PAGE_TITLE_HOME} onGoHome={handleGoHome} />
      <CharactorsPage
        currentPage={userSelectedPage}
        onSelectPage={handleSelectPage}
        onLearnMore={handleLearnMore}
      />
    </div>
  );
};

export default Home;
