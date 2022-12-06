import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "components/ExpensesItem/ExpensesItem";
import { StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  const { expenses, deleteExpense } = useExpensesContext();

  return (
    <StyledExpensesList>
      {expenses.map((item) => (
        <ExpensesItem expense={item} key={item.id} onClick={() => deleteExpense(item.id)} />
      ))}
    </StyledExpensesList>
  );
};
