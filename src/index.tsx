import React from "react";
import ReactDOM from "react-dom/client";
import { AppContext, CurrencyContextProvider } from "context";
import { GlobalStyles } from "GlobalStyles";
import { App } from "./App";
import { BudgetContextProvider } from "context/BudgetContext/BudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext components={[CurrencyContextProvider, BudgetContextProvider]}>
    <GlobalStyles />
    <App />
  </AppContext>,
);
