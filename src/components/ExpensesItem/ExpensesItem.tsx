import { StyledExpensesItem, ExpenseText } from "./styles";
import { ReactComponent as DeleteExpenseIcon } from "../../assets/icons/delete-expense.svg";
import { Badge, Button } from "components";
import { IExpense } from "context/ExpensesContext/types";

interface IProps {
  expense: IExpense;
  onClick: () => void;
}

export const ExpensesItem = ({ expense: { expenseCost, expenseName }, onClick }: IProps) => {
  return (
    <StyledExpensesItem>
      <ExpenseText>{expenseName}</ExpenseText>
      <Badge>{expenseCost}</Badge>
      <Button $deleteExpense onClick={onClick}>
        <DeleteExpenseIcon />
      </Button>
    </StyledExpensesItem>
  );
};
