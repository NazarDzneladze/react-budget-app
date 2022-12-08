import { ExpensesItem } from "components";
import { useExpensesContext } from "context";
import { IExpense } from "context/ExpensesContext/types";
import { StyledExpensesList } from "./styles";

interface IProps {
  expenses: IExpense[];
}

export const ExpensesList = ({ expenses }: IProps) => {
  const { deleteExpense } = useExpensesContext();

  return (
    <StyledExpensesList>
      {expenses.map((expense) => (
        <ExpensesItem
          expense={expense}
          key={expense.id}
          onClick={() => deleteExpense(expense.id)}
        />
      ))}
    </StyledExpensesList>
  );
};
