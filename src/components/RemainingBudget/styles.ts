import styled from "styled-components";
import { StyledTotalBudget } from "components/TotalBudget/styles";

interface IProps {
  $isOverSpending: boolean;
}

const StyledRemainingBudget = styled(StyledTotalBudget)<IProps>`
  background-color: ${({ $isOverSpending }) => ($isOverSpending ? "#FF0000" : "#CCD5FF")};

  transition: 0.5s;
`;

const RemainingText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

const OverSpendingText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
`;

export { StyledRemainingBudget, RemainingText, OverSpendingText };
