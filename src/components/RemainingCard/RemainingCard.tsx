import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { remaining } = useBudgetContext();
  if (remaining < 0) {
    return (
      <div>
        Overspending by {currentCurrency.value}
        {Math.abs(remaining)}
      </div>
    );
  }

  return (
    <div>
      Remaining: {currentCurrency.value}
      {remaining}
    </div>
  );
};
