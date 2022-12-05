import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 25px;
`;

const FormErrorMessage = styled.p`
  color: red;
`;

export { StyledForm, FormErrorMessage };
