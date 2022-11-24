import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { useInput } from "../../hooks/useInput";
import { Input } from "../Input/Input";
import { Submit } from "../Submit/Submit";
import { Title } from "../Title/Title";
import { IFormData } from "./types";

export const Form = () => {
  const inputValue = useInput();
  const { register, handleSubmit, reset } = useForm<IFormData>({ mode: "onBlur" });
  const { setNewExpense } = useExpensesContext();
  const { setNewRemaining, setNewSpending, budget } = useBudgetContext();
  return (
    <form>
      <Title />
      <input />
      <input />
      <Submit />
    </form>
  );
};
