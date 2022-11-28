import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { Title } from "../Title/Title";
import { Submit } from "../Submit/Submit";
import { StyledForm, StyledInputForm } from "./formStyled";
import { IFormData } from "./types";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();

  const { setNewExpense } = useExpensesContext();
  const { budget } = useBudgetContext();

  const onSubmit: SubmitHandler<IFormData> = ({ title, cost }) => {
    if (budget > 0) {
      setNewExpense({ title, cost, id: v4() });
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title label="Add Expense" />

      <StyledInputForm
        type="text"
        placeholder="enter name ..."
        {...register("title", {
          required: "Name is required",
          maxLength: { value: 10, message: "Maximum 20 letters" },
        })}
      />
      <span className="form-field__error">{errors.title && errors.title.message}</span>

      <StyledInputForm
        type="text"
        placeholder="enter price ..."
        {...register("cost", {
          required: "Price is required",
          maxLength: { value: 10, message: "Maximum 10 letters" },
          pattern: { value: /^[ 0-9]+$/, message: "Only numbers please" },
        })}
      />
      <span className="form-field__error">{errors.cost && errors.cost.message}</span>
      <Submit />
    </StyledForm>
  );
};
