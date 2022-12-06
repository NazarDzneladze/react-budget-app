import { useCurrenciesContext } from "context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { SpentSoFarInfo, StyledSpentSoFarBudget } from "./styles";

export const SpentSoFarBudget = () => {
  const { currentCurrency } = useCurrenciesContext();
  const { expenses } = useExpensesContext();

  const spentSoFar = expenses.reduce((total, expense) => (total += expense.expenseCost), 0);

  return (
    <StyledSpentSoFarBudget>
      <SpentSoFarInfo>
        Spent so far: {spentSoFar}
        {currentCurrency.value}
      </SpentSoFarInfo>
    </StyledSpentSoFarBudget>
  );
};
