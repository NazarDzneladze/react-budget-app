import { Badge } from "components/Badge/Badge";
import { Button } from "components/Button/Button";
import { IExpense } from "types";
import { StyledExpensesItem } from "./styles";

interface IProps {
  expense: IExpense;
  onClick: () => void;
}

export const ExpensesItem = ({ expense: { expenseCost, expenseName }, onClick }: IProps) => {
	console.log();
	
  console.log(onClick);

  return (
    <StyledExpensesItem>
      {expenseName}
      <Badge>{expenseCost}</Badge>
      <Button $deleteExpense onClick={onClick}>
        X
      </Button>
    </StyledExpensesItem>
  );
};
