import { ExpensesList } from "components/ExpensesList/ExpensesList";
import { Input } from "components/Input/Input";
import { Title } from "components/Title/Title";
import { useInput } from "hooks/useInput";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <Input {...search} placeholder="search..." />
      <ExpensesList />
    </StyledExpenses>
  );
};
