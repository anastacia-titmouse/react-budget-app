import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useInput } from "../../hooks/useInput";
import { StyledBudgetCard, StyledButton, StyledTitle } from "./budgetCardStyled";

export const BudgetCard = () => {
  const inputValue = useInput();
  const { budget, setNewBudget } = useBudgetContext();

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
          <StyledTitle>Budget:{budget}</StyledTitle>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};
