import { createContext, useContext, useState } from "react";
import { IContext } from "../../types";
import { IExpensesContext } from "./types";

export const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [],
    addNewExpense: (newExpense) => {
      setExpensesContext((ctx) => ({ ...ctx, expenses: [...ctx.expenses, newExpense] }));
    },
    deleteExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));

  return expensesContext;
};

export const useExpensesContext = () => useContext(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IContext) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
