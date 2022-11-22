import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { Badge } from "../Badge/Badge";

export const ExpensesListItem = () => {
  const { expenses } = useExpensesContext();
  return (
    <div>
      {expenses.map(({ id, title, cost }) => {
        return (
          <li key={id}>
            {title} = {cost}
          </li>
        );
      })}
      <Badge />
    </div>
  );
};
