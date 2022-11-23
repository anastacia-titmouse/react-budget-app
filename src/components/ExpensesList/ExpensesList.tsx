import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { ExpensesListItem } from "../ExpensesListItem/ExpensesListItem";

export const ExpensesList = () => {
  const { expenses, searchValue } = useExpensesContext();
  return (
    <ul>
      {expenses.map(({ title, cost, id }) => (
        <ExpensesListItem key={id} title={title} cost={cost} id={id} />
      ))}
    </ul>
  );
};
