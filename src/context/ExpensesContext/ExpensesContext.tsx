import { createContext, useContext, useState } from "react";
import { IContext, IExpense, IExpensesContext } from "../../types";
import { v4 as uuidv4 } from "uuid";

export const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [
      {
        expenseName: "shoping",
        expenseCost: 100,
        id: uuidv4(),
      },
      {
        expenseName: "drinking",
        expenseCost: 200,
        id: uuidv4(),
      },
    ],
    addNewExpense: (newExpense: IExpense) => {
      setExpensesContext((ctx) => ({ ...ctx, expenses: [...ctx.expenses, newExpense] }));
    },
    deleteExpense: (id: string) => {
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
