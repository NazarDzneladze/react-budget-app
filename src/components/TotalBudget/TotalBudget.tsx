import { useCurrenciesContext } from "context/CurrencyContext/CurrencyContext";
import { StyledTotalBudget } from "./styles";

export const TotalBudget = () => {
  const { currentCurrency } = useCurrenciesContext();

  return <StyledTotalBudget>Budget:3000{currentCurrency.value}</StyledTotalBudget>;
};
