import styled from "styled-components";

const StyledApp = styled.div`
  place-self: center center;

  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 30px;

  width: clamp(320px, 100%, 425px);
  padding: 30px 20px 53px;
  height: auto;

  background-color: #ffffff;
`;

export { StyledApp };
