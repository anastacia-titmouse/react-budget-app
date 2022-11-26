import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { StyledBudgetCard, StyledButton, StyledTitle } from "./budgetCardStyled";

export const BudgetCard = () => {
  const inputValue = useInput();
  const { budget, setNewBudget } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    setNewBudget(+inputValue.value);
  };
  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <input type="text" {...inputValue} />
          <StyledButton onClick={handleSave}>Save</StyledButton>
        </>
      ) : (
        <>
          <StyledTitle>
            Budget{currentCurrency.value}:{budget}
          </StyledTitle>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};
