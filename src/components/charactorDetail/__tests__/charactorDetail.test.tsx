import React from "react";
import { ThemeProvider } from "styled-components";
import { MockedProvider } from "@apollo/client/testing";
import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import wait from "waait";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

import CharactorDetail from "../index";
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
          __typename: "PersonResponse",
        },
      },
    },
  },
];
const errorMocks = [
  {
    request: {
      query: FIND_PERSON_QUERY,
      variables: { page: 1 }, // workaround for causing error
    },
    error: new Error("Network error"),
  },
];
const onGoHome = sinon.spy();

afterEach(cleanup);

test("does component render", () => {
  const { asFragment } = render(
    <ThemeProvider theme={responsiveTheme}>
      <MockedProvider addTypename={false} mocks={charactorMocks}>
        <CharactorDetail
          selectedCharactor={"Luke Skywalker"}
          onGoHome={onGoHome}
        />
      </MockedProvider>
    </ThemeProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("render CharactorDetail in loading state", () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <MockedProvider addTypename={false} mocks={charactorMocks}>
          <CharactorDetail selectedCharactor={""} onGoHome={onGoHome} />
        </MockedProvider>
      </ThemeProvider>
    );
  });
  expect(
    wrapper.containsAllMatchingElements([<LoadingIndicator></LoadingIndicator>])
  ).toBe(true);
});

test("render CharactorDetail in error state", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <MockedProvider addTypename={false} mocks={errorMocks}>
          <CharactorDetail
            selectedCharactor={"Luke Skywalker"}
            onGoHome={onGoHome}
          />
        </MockedProvider>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  wrapper.update();

  expect(
    wrapper.containsAllMatchingElements([
      <h2>Error retrieving Charactor Details</h2>,
    ])
  ).toBe(true);
});

test("render charactor details", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <MockedProvider addTypename={false} mocks={charactorMocks}>
          <CharactorDetail
            selectedCharactor={"Luke Skywalker"}
            onGoHome={onGoHome}
          />
        </MockedProvider>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  wrapper.update();
  expect(
    wrapper.containsAllMatchingElements([
      <h2>Charactor - Luke Skywalker</h2>,
      <h2>Home Planet - Tatooine</h2>,
    ])
  ).toBe(true);
});
