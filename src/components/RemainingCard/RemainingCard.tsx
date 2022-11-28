import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";

import { RemainingCardStyled, Title } from "./remainingStyled";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remaining = budget - expenses.reduce((total, { cost }) => total + +cost, 0);

  const isOverSpending = remaining < 0;

  return (
    <RemainingCardStyled $isOverBudget={isOverSpending}>
      <Title $isOverBudget={isOverSpending}>
        {isOverSpending
          ? `Overspending by ${currentCurrency.value}${Math.abs(remaining)} `
          : `Remaining: ${currentCurrency.value}${remaining}`}
      </Title>
    </RemainingCardStyled>
  );
};
