import { useCurrenciesContext } from "context/CurrencyContext/CurrencyContext";
import { StyledRemainingBudget } from "./styles";

export const RemainingBudget = () => {
  const { currentCurrency } = useCurrenciesContext();

  return <StyledRemainingBudget>Remeining:2000{currentCurrency.value}</StyledRemainingBudget>;
};
