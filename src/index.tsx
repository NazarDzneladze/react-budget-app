import React from "react";
import ReactDOM from "react-dom/client";
import {
  AppContext,
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
} from "context";
import { GlobalStyles } from "GlobalStyles";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext
    components={[CurrencyContextProvider, BudgetContextProvider, ExpensesContextProvider]}
  >
    <GlobalStyles />
    <App />
  </AppContext>,
);
