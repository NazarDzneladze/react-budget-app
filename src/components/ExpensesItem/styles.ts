import styled from "styled-components";

const StyledExpensesItem = styled.li`
  display: grid;
  grid-template-columns: 0.6fr auto auto;
  align-items: end;
  justify-items: end;

  padding: 10px 0 10px;
  padding-left: 5px;

  border-bottom: 2px solid #ccd5ff; ;
`;

const ExpenseText = styled.p`
  place-self: center start;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;

export { StyledExpensesItem, ExpenseText };
