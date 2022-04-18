import React from "react";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { MockedProvider } from "@apollo/client/testing";
import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import wait from "waait";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

import Details from "../index";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import LoadingIndicator from "../../../components/loadingIndicator";
import { FIND_PERSON_QUERY } from "../../../graphQL/queries";
import { responsiveTheme } from "../../../utils/responsiveTheme";

configure({ adapter: new Adapter() });
const charactorMocks = [
  {
    request: {
      query: FIND_PERSON_QUERY,
      variables: { name: "Luke Skywalker" },
    },
    result: {
      data: {
        personByName: {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          gender: "male",
          homeworld: {
            name: "Tatooine",
            rotationPeriod: "23",
            terrain: "desert",
            climate: "arid",
            population: "200000",
          },
        },
      },
    },
  },
];

afterEach(cleanup);
test("render detail with loader state initially", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <RecoilRoot>
          <MockedProvider addTypename={false} mocks={charactorMocks}>
            <Details />
          </MockedProvider>
        </RecoilRoot>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  expect(
    wrapper.containsAllMatchingElements([
      <Header title="Charactor Detail"></Header>,
      <LoadingIndicator></LoadingIndicator>,
      <Footer title="2022"></Footer>,
    ])
  ).toBe(true);
});
