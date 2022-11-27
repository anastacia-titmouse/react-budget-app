import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { ExpensesListItem } from "../ExpensesListItem/ExpensesListItem";
import { StyledEmptyList, StyledList } from "./listStyled";

export const ExpensesList = () => {
  const { expenses, searchValue } = useExpensesContext();
  const [searchExpenses, setSearchExpenses] = useState(expenses);
  useEffect(() => {
    setSearchExpenses(expenses.filter((exp) => exp.title.toLowerCase().includes(searchValue)));
  }, [searchValue, expenses]);
  if (!searchExpenses.length) {
    return <StyledEmptyList>Oooops!🙈</StyledEmptyList>;
  }
  return (
    <StyledList>
      {searchExpenses.map(({ title, cost, id }) => (
        <ExpensesListItem key={id} title={title} cost={cost} id={id} />
      ))}
    </StyledList>
  );
};
