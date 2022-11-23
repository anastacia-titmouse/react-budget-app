import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";

interface IProps {
  title: string;
  cost: number;
  id: string;
}

export const ExpensesListItem = ({ title, cost, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <li>
      <p>{title}</p>
      <span>
        {currentCurrency.value}
        {cost}
      </span>
      <button onClick={handleDelete} />
    </li>
  );
};
