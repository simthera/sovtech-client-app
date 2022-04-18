/*
 *
 * Details
 *
 */

import React, { FC, ReactElement, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Header from "../../components/header";
import { PAGE_TITLE_DETAIL } from "../../utils/constants";

import CharactorDetail from "../../components/charactorDetail";
import { searchText as searchTextAtom } from "../../atoms/atoms";

const Details: FC<{}> = (): ReactElement => {
  const selectedCharactor = useRecoilValue(searchTextAtom);
  const history = useHistory();
  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div>
      <Helmet>
        <title>Details</title>
        <meta name="description" content="Description of Details" />
      </Helmet>
      <Header title={PAGE_TITLE_DETAIL} onGoHome={handleGoHome} />
      <CharactorDetail
        selectedCharactor={selectedCharactor}
        onGoHome={handleGoHome}
      />
    </div>
  );
};

export default Details;
