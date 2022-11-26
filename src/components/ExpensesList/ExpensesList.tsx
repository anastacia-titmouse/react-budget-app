import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { ExpensesListItem } from "../ExpensesListItem/ExpensesListItem";
import { StyledList } from "./listStyled";

export const ExpensesList = () => {
  const { expenses, searchValue } = useExpensesContext();
  const [searchExpenses, setSearchExpenses] = useState(expenses);
  useEffect(() => {
    setSearchExpenses(expenses.filter((exp) => exp.title.toLowerCase().includes(searchValue)));
  }, [searchValue, expenses]);
  return (
    <StyledList>
      {searchExpenses.map(({ title, cost, id }) => (
        <ExpensesListItem key={id} title={title} cost={cost} id={id} />
      ))}
    </StyledList>
  );
};
