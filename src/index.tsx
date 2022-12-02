import React from "react";
import ReactDOM from "react-dom/client";
import { AppContext, CurrencyContextProvider } from "context";
import { GlobalStyles } from "GlobalStyles";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext components={[CurrencyContextProvider]}>
    <GlobalStyles />
    <App />
  </AppContext>,
);
