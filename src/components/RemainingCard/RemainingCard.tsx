import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { RemainingCardStyled, RemainingCardText } from "./remainingStyled";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { remaining } = useBudgetContext();
  return (
    <RemainingCardStyled>
      <RemainingCardText>
        {" "}
        Remaining: {currentCurrency.value}
        {remaining}
      </RemainingCardText>
    </RemainingCardStyled>
  );
};
