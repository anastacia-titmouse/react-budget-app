import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { SpentcardStyled } from "./spentCardStyled";

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { spending } = useBudgetContext();

  return (
    <SpentcardStyled>
      Spent so far: {currentCurrency.value}
      {spending}
    </SpentcardStyled>
  );
};
