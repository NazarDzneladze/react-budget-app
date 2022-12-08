import { CustomSelelct, RemainingBudget, SpentSoFarBudget, Title, TotalBudget } from "components";
import { StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <Title>Budget App</Title>
      <CustomSelelct />
      <TotalBudget />
      <RemainingBudget />
      <SpentSoFarBudget />
    </StyledBudget>
  );
};
