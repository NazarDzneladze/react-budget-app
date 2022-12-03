import { useCurrenciesContext } from "context/CurrencyContext/CurrencyContext";
import { SpentSoFarInfo, StyledSpentSoFarBudget } from "./styles";

export const SpentSoFarBudget = () => {
  const { currentCurrency } = useCurrenciesContext();

  return (
    <StyledSpentSoFarBudget>
      <SpentSoFarInfo>Spent so far: 1000{currentCurrency.value}</SpentSoFarInfo>
    </StyledSpentSoFarBudget>
  );
};
