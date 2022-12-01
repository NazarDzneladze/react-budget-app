import { useCurrenciesContext } from "context/CurrencyContext/CurrencyContext";
import { StyledBadge } from "./styles";

export const Badge = () => {
  const { currentCurrency } = useCurrenciesContext();

  return <StyledBadge>{currentCurrency.value}</StyledBadge>;
};
