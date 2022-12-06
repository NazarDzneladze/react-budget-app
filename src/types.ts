import { ReactNode } from "react";
import { Currency } from "./config/Currency";

// export interface ICurrencyContextProviderProps {
//   children: ReactNode;
// }

export interface IContext {
  children: ReactNode;
}
export interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

export interface ICurrencyContext {
  currencies: ICurrency[];
  currentCurrency: ICurrency;
  setNewCurrency: (option: ICurrency) => void;
}

export interface IBudgetContext {
  budget: number;
  setNewBudget: (newBudget: number) => void;
}