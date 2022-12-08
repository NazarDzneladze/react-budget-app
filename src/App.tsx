import { Budget, Expenses, Form } from "components";
import { StyledApp } from "styles";

export const App = () => {
  return (
    <StyledApp>
      <Budget />
      <Expenses />
      <Form />
    </StyledApp>
  );
};
