import styled from "styled-components";

const StyledExpensesItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  justify-items: center;

  padding-bottom: 16px;
  border-bottom: 2px solid #ccd5ff; ;
`;

export { StyledExpensesItem };
