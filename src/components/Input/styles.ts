import styled from "styled-components";
import { css } from "styled-components";

interface IProps {
  $editBudget?: boolean;
}

const StyledInput = styled.input<IProps>`
  max-height: 50px;
  padding-left: 20px;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }

  ${({ $editBudget }) =>
    $editBudget &&
    css`
      max-width: 165px;
      padding: 10px 0 10px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;

      background-color: transparent;
      box-shadow: none;

      ::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }

      :hover {
        background-color: rgba(255, 255, 255, 0.25);
      }
    `}
`;

export { StyledInput };
