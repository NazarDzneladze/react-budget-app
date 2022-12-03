import styled from "styled-components";
import { StyledTotalBudget, TotalBudgetInfo } from "components/TotalBudget/styles";

const StyledRemainingBudget = styled(StyledTotalBudget)`
  background-color: #ccd5ff;
`;

const RemainingBudgetInfo = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export { StyledRemainingBudget, RemainingBudgetInfo };
