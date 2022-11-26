import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { SpentcardStyled, StyledTitle } from "./spentCardStyled";

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { spending } = useBudgetContext();

  return (
    <SpentcardStyled>
      <StyledTitle>
        Spent so far: {currentCurrency.value}
        {spending}
      </StyledTitle>
    </SpentcardStyled>
  );
};
