import styled from "styled-components";

const StyledTotalBudget = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: span 2;

  height: 100px;
  padding: 0 20px 0;

  background-color: #7cc6fe;
  border-radius: 10px;
  color: #000000;
`;

const TotalBudgetInfo = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export { StyledTotalBudget, TotalBudgetInfo };
