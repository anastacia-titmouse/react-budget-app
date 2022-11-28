import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { SpentcardStyled } from "./spentCardStyled";

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spent = expenses.reduce((total, { cost }) => total + +cost, 0);

  return (
    <SpentcardStyled>
      Spent so far: {currentCurrency.value}
      {spent}
    </SpentcardStyled>
  );
};
