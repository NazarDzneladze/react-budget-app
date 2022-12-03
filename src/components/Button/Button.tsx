import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface IProps {
  children: ReactNode;
  handleIsEditBudget?: () => void;
  $budget?: boolean;
}

export const Button = ({ children, handleIsEditBudget, $budget = false }: IProps) => {
  return (
    <StyledButton onClick={handleIsEditBudget} $budget={$budget}>
      {children}
    </StyledButton>
  );
};
