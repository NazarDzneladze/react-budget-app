import React from "react";
import ReactDOM from "react-dom/client";
import { CurrencyContextProvider } from "context";
import { GlobalStyles } from "GlobalStyles";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <CurrencyContextProvider>
    <GlobalStyles />
    <App />
  </CurrencyContextProvider>,
);
