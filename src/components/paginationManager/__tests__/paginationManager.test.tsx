import React from "react";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

import PaginationManager from "../index";
import { responsiveTheme } from "../../../utils/responsiveTheme";

configure({ adapter: new Adapter() });
const pages = 9;
const testFunction = () => ({});
afterEach(cleanup);

test("does component render", () => {
  const { asFragment } = render(
    <ThemeProvider theme={responsiveTheme}>
      <PaginationManager
        numberOfPages={pages}
        currentPage={1}
        onSelectPage={testFunction}
      />
    </ThemeProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("render pages 1 to 9 ", () => {
  let wrapper;

  act(() => {
    wrapper = mount(
      <ThemeProvider theme={responsiveTheme}>
        <RecoilRoot>
          <PaginationManager
            numberOfPages={pages}
            currentPage={1}
            onSelectPage={testFunction}
          />
        </RecoilRoot>
      </ThemeProvider>
    );
  });
  let count = 0;
  wrapper.find("a").forEach(function () {
    ++count;
  });
  expect(count).toBe(9);
});
