import { useCurrenciesContext } from "context/CurrencyContext/CurrencyContext";
import { RemainingBudgetInfo, StyledRemainingBudget } from "./styles";

export const RemainingBudget = () => {
  const { currentCurrency } = useCurrenciesContext();

  return (
    <StyledRemainingBudget>
      <RemainingBudgetInfo>Remeining: 2000{currentCurrency.value}</RemainingBudgetInfo>
    </StyledRemainingBudget>
  );
};
