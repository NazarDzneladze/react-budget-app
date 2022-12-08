import { ExpensesList, Input, Title } from "components";
import { useExpensesContext } from "context";
import { useDebounce, useInput } from "hooks";
import { useEffect, useState } from "react";
import { StyledExpenses, UnsuccessfulSearchText } from "./styles";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const search = useInput();
  const debouncedValue = useDebounce(search.value);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.expenseName.toLocaleUpperCase().includes(debouncedValue.toLocaleUpperCase()),
      ),
    );
  }, [debouncedValue, expenses]);

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <Input {...search} placeholder="search..." />
      {expenses.length ? (
        <ExpensesList expenses={filteredExpenses} />
      ) : (
        <UnsuccessfulSearchText>Oooops 🙈</UnsuccessfulSearchText>
      )}
    </StyledExpenses>
  );
};
