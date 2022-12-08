import { Button, Input } from "components";
import { useCurrenciesContext, useBudgetContext } from "context";
import { useInput, useToggle } from "hooks";
import { StyledTotalBudget, TotalBudgetInfo } from "./styles";

export const TotalBudget = () => {
  const currentBudget = useInput();
  const { currentCurrency } = useCurrenciesContext();
  const { budget, setNewBudget } = useBudgetContext();
  const [isEditBudget, setIsEditBudget] = useToggle();

  const handleIsEditBudget = () => {
    if (isEditBudget) {
      setNewBudget(+currentBudget.value);
      setIsEditBudget();
    } else {
      setIsEditBudget();
    }
  };

  return (
    <StyledTotalBudget>
      {isEditBudget ? (
        <Input {...currentBudget} placeholder="Enter  budget ..." type="number" $editBudget />
      ) : (
        <TotalBudgetInfo>
          Budget: {currentCurrency.value}
          {budget}
        </TotalBudgetInfo>
      )}
      <Button onClick={handleIsEditBudget}>{isEditBudget ? "Save" : "Edit"}</Button>
    </StyledTotalBudget>
  );
};
