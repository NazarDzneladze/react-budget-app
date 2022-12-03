import { StyledTotalBudget } from "components/TotalBudget/styles";
import styled from "styled-components";

const StyledSpentSoFarBudget = styled(StyledTotalBudget)`
  background-color: #e7bbe3;
`;

const SpentSoFarInfo = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export { StyledSpentSoFarBudget, SpentSoFarInfo };
