import { useCurrenciesContext } from "context/CurrencyContext/CurrencyContext";
import { StyledSpentSoFarBudget } from "./styles";

export const SpentSoFarBudget = () => {
  const { currentCurrency } = useCurrenciesContext();

  return <StyledSpentSoFarBudget>Spent so far:1000{currentCurrency.value}</StyledSpentSoFarBudget>;
};
