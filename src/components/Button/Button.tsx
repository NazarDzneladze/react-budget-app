import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  $formButton?: boolean;
}

export const Button = ({ children, onClick, $formButton }: IProps) => {
  return (
    <StyledButton onClick={onClick} $formButton={$formButton}>
      {children}
    </StyledButton>
  );
};
