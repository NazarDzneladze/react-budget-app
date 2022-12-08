import { useCurrenciesContext } from "context";
import { ReactNode } from "react";
import { StyledBadge } from "./styles";

interface IProps {
  children: ReactNode;
}

export const Badge = ({ children }: IProps) => {
  const { currentCurrency } = useCurrenciesContext();

  return (
    <StyledBadge>
      {currentCurrency.value}
      {children}
    </StyledBadge>
  );
};
