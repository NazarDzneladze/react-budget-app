import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  $formButton?: boolean;
  $deleteExpense?: boolean;
}

export const Button = ({ children, onClick, $formButton, $deleteExpense }: IProps) => {
  return (
    <StyledButton onClick={onClick} $formButton={$formButton} $deleteExpense={$deleteExpense}>
      {children}
    </StyledButton>
  );
};
