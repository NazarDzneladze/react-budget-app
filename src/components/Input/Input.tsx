import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  $editBudget?: boolean;
}

export const Input = ({
  placeholder,
  onChange,
  value,
  type = "text",
  $editBudget = false,
}: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      $editBudget={$editBudget}
      type={type}
    />
  );
};
