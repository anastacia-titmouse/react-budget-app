import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useInput } from "../../hooks/useInput";
import { StyledBudgetCard, StyledTitle } from "./budgetStyled";

export const BudgetCard = () => {
  const inputValue = useInput();
  const { budget, setNewBudget } = useBudgetContext();

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    setNewBudget({ currency: "$", budgetSum: +inputValue.value });
  };
  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <input type="text" {...inputValue} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {budget.map(({ currency, budgetSum }) => {
            return (
              <StyledTitle>
                Budget: {currency}
                {budgetSum}
              </StyledTitle>
            );
          })}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </StyledBudgetCard>
  );
};
