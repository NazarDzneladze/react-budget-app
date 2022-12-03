import styled from "styled-components";
import { css } from "styled-components";

interface IProps {
  $budget?: boolean;
}

const StyledButton = styled.button<IProps>`
  ${({ $budget }) =>
    $budget &&
    css`
      padding: 10px 25px 10px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;

      background-color: white;
      border: none;
      border-radius: 10px;
    `}
`;

export { StyledButton };
