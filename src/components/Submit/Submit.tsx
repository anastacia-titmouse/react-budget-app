import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";

export const Submit = () => {
  const { setNewExpense } = useExpensesContext();

  const handleSubmit = () => setNewExpense({ id: "123dd", title: "auto", cost: 30 });

  return <button onClick={handleSubmit}>Done</button>;
};
