export interface IExpensesContext {
  expenses: IExpense[];
  addNewExpense: (newExpense: IExpense) => void;
  deleteExpense: (id: string) => void;
}

export interface IExpense {
  expenseName: string;
  expenseCost: number;
  id: string;
}
