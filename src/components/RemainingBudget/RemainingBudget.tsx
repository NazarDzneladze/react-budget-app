import { useBudgetContext, useCurrenciesContext, useExpensesContext } from "context";
import { useEffect, useState } from "react";
import { RemainingText, OverSpendingText, StyledRemainingBudget } from "./styles";

export const RemainingBudget = () => {
  const { budget } = useBudgetContext();
  const { currentCurrency } = useCurrenciesContext();
  const { expenses } = useExpensesContext();
  const [$isOverSpending, setIsOverSpending] = useState(false);

  const spentSoFar = expenses.reduce((total, expense) => (total += expense.expenseCost), 0);
  const overSpending = budget - spentSoFar;

  useEffect(() => {
    if (overSpending < 0) {
      setIsOverSpending(true);
    } else if (overSpending >= 0) {
      setIsOverSpending(false);
    }
  }, [overSpending]);

  return (
    <StyledRemainingBudget $isOverSpending={$isOverSpending}>
      {$isOverSpending ? (
        <OverSpendingText>
          Overspending by {currentCurrency.value}
          {Math.abs(overSpending)}
        </OverSpendingText>
      ) : (
        <RemainingText>
          Remaining: {currentCurrency.value}
          {overSpending}
        </RemainingText>
      )}
    </StyledRemainingBudget>
  );
};
