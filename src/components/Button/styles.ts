import styled from "styled-components";
import { css } from "styled-components";

interface IProps {
  $formButton?: boolean;
}

const StyledButton = styled.button<IProps>`
  padding: 10px 25px 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  background-color: white;
  border: none;
  border-radius: 10px;

  ${({ $formButton }) =>
    $formButton &&
    css`
      padding: 15px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #ffffff;
      background-color: #23c9ff;
      border-radius: 10px;
      border: none;
    `}
`;

export { StyledButton };
