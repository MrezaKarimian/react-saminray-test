import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Provider from "Provider/Provider";
import {
  createTheme,
  ThemeProvider,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { SnackbarProvider } from "notistack";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createTheme({
  direction: "rtl",
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
      <Provider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <App />
        </SnackbarProvider>
      </Provider>
    </StylesProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
