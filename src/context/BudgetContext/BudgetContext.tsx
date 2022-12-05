import { createContext, useContext, useState } from "react";
import { IContext, IBudgetContext } from "../../types";

export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (budget) => {
      setBudgetContext((ctx) => ({ ...ctx, budget }));
    },
  }));

  return budgetContext;
};

export const useBudgetContext = () => useContext(BudgetContext);

export const BudgetContextProvider = ({ children }: IContext) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
