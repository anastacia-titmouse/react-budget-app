import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { ExpensesListItem } from "../ExpensesListItem/ExpensesListItem";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();

  return (
    <div>
      <ul>
        {expenses.map(({ id, title, cost }) => {
          return <ExpensesListItem key={id} title={title} cost={cost} />;
        })}
      </ul>
    </div>
  );
};
