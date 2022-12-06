import React from "react";
import ReactDOM from "react-dom/client";
import { AppContext, CurrencyContextProvider } from "context";
import { GlobalStyles } from "GlobalStyles";
import { App } from "./App";
import { BudgetContextProvider } from "context/BudgetContext/BudgetContext";
import { ExpensesContextProvider } from "context/ExpensesContext/ExpensesContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext
    components={[CurrencyContextProvider, BudgetContextProvider, ExpensesContextProvider]}
  >
    <GlobalStyles />
    <App />
  </AppContext>,
);
