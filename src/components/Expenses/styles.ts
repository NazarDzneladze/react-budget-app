import styled from "styled-components";

const StyledExpenses = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 250px;
  row-gap: 30px;
`;

const UnsuccessfulSearchText = styled.p`
  place-self: center center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

export { StyledExpenses, UnsuccessfulSearchText };
