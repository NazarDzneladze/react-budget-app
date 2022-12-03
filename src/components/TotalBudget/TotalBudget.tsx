import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { useBudgetContext } from "context/BudgetContext/BudgetContext";
import { useCurrenciesContext } from "context/CurrencyContext/CurrencyContext";
import { useInput } from "hooks/useInput";
import { useState } from "react";
import { StyledTotalBudget, TotalBudgetInfo } from "./styles";

export const TotalBudget = () => {
  const currentBudget = useInput();
  const { currentCurrency } = useCurrenciesContext();
  const { budget, setNewBudget } = useBudgetContext();
  const [isEditBudget, setIsEditBudget] = useState(false);

  const handleIsEditBudget = () => {
    if (isEditBudget) {
      setIsEditBudget((isEditBudget) => !isEditBudget);
      setNewBudget(+currentBudget.value);
    } else {
      setIsEditBudget((isEditBudget) => !isEditBudget);
    }
  };

  return (
    <StyledTotalBudget>
      {isEditBudget ? (
        <>
          <Input {...currentBudget} placeholder="Enter  budget ..." type="number" $editBudget />
          <Button handleIsEditBudget={handleIsEditBudget} $budget>
            Save
          </Button>
        </>
      ) : (
        <>
          <TotalBudgetInfo>
            Budget: {budget}
            {currentCurrency.value}
          </TotalBudgetInfo>
          <Button handleIsEditBudget={handleIsEditBudget} $budget>
            Edit
          </Button>
        </>
      )}
    </StyledTotalBudget>
  );
};
