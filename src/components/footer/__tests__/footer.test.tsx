import React from "react";
import { ThemeProvider } from "styled-components";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Footer from "../index";
import { responsiveTheme } from "../../../utils/responsiveTheme";

afterEach(cleanup);

test("does component render", () => {
  const { asFragment } = render(
    <ThemeProvider theme={responsiveTheme}>
      <Footer title="Test Footer" />
    </ThemeProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
