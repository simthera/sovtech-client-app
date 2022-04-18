import React from "react";
import { ThemeProvider } from "styled-components";
import { render, cleanup } from "@testing-library/react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

import Header from "../index";
import { responsiveTheme } from "../../../utils/responsiveTheme";

configure({ adapter: new Adapter() });
afterEach(cleanup);

test("does component render", () => {
  const { asFragment } = render(
    <ThemeProvider theme={responsiveTheme}>
      <Header title="Test" />
    </ThemeProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
