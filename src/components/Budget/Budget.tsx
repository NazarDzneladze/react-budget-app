import { CustomSelelct } from "components/CustomSelect/CustomSelelct";
import { RemainingBudget } from "components/RemainingBudget/RemainingBudget";
import { SpentSoFarBudget } from "components/SpentSoFarBudget/SpentSoFarBudget";
import { Title } from "components/Title/Title";
import { TotalBudget } from "components/TotalBudget/TotalBudget";
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
