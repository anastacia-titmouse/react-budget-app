import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { RemainingCardText } from "./remainingStyled";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { remaining } = useBudgetContext();
  if (remaining < 0) {
    return (
      <RemainingCardText>
        Overspending by {currentCurrency.value}
        {Math.abs(remaining)}
      </RemainingCardText>
    );
  }
  return (
    <div>
      Remaining: {currentCurrency.value}
      {remaining}
    </div>
  );
};
