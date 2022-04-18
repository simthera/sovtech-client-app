import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { responsiveTheme } from "./utils/responsiveTheme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import configureStore from "./store/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={responsiveTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
