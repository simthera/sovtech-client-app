import React from "react";
import { ThemeProvider } from "styled-components";
import { MockedProvider } from "@apollo/client/testing";
import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import wait from "waait";
import "@testing-library/jest-dom/extend-expect";

import CharactorsPage from "../index";
import { PEOPLE_QUERY } from "../../../graphQL/queries";
import LoadingIndicator from "../../../components/loadingIndicator";
import { responsiveTheme } from "../../../utils/responsiveTheme";

configure({ adapter: new Adapter() });
const charactorsMocks = [
  {
    request: {
      query: PEOPLE_QUERY,
      variables: { page: 1 },
    },
    result: {
      data: {
        people: {
          numberOfPages: 1,
          hasNextPage: true,
          hasPreviousPage: false,
          people: [
            {
              name: "Luke Skywalker",
            },
            {
              name: "C-3PO",
            },
            {
              name: "R2-D2",
            },
          ],
          __typename: "PaginatedResultResponese",
        },
      },
    },
  },
];
const errorMocks = [
  {
    request: {
      query: PEOPLE_QUERY,
      variables: { name: "test" }, //workaround for causing error
    },
    error: new Error("here's a regular error"),
  },
];

afterEach(cleanup);
const onSelectPage = sinon.spy();
const onLearnMore = sinon.spy();

test("does component render", () => {
  const { asFragment } = render(
    <ThemeProvider theme={responsiveTheme}>
      <MockedProvider addTypename={false} mocks={charactorsMocks}>
        <CharactorsPage
          currentPage={1}
          onSelectPage={onSelectPage}
          onLearnMore={onLearnMore}
        />
      </MockedProvider>
    </ThemeProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("render CharactorsPage in loading state", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <MockedProvider addTypename={false} mocks={charactorsMocks}>
          <CharactorsPage
            currentPage={1}
            onSelectPage={onSelectPage}
            onLearnMore={onLearnMore}
          />
        </MockedProvider>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  expect(
    wrapper.containsAllMatchingElements([<LoadingIndicator></LoadingIndicator>])
  ).toBe(true);
});

test("render CharactorsPage in error state", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <MockedProvider addTypename={false} mocks={errorMocks}>
          <CharactorsPage
            currentPage={1}
            onSelectPage={onSelectPage}
            onLearnMore={onLearnMore}
          />
        </MockedProvider>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  wrapper.update();

  expect(
    wrapper.containsAllMatchingElements([<h2>Error retrieving Charactor/s</h2>])
  ).toBe(true);
});

test("render charactor list", async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <MockedProvider addTypename={false} mocks={charactorsMocks}>
          <CharactorsPage
            currentPage={1}
            onSelectPage={onSelectPage}
            onLearnMore={onLearnMore}
          />
        </MockedProvider>
      </ThemeProvider>
    );
  });
  await act(() => wait(0));
  wrapper.update();
  expect(
    wrapper.containsAllMatchingElements([
      <h2>Luke Skywalker</h2>,
      <h2>C-3PO</h2>,
      <h2>R2-D2</h2>,
    ])
  ).toBe(true);
});
