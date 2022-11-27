import { createContext, useContext, useState } from "react";
import { IExpensesContext, IExpensesContextProviderProps } from "./types";

export const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [],
    setNewExpense: (newExpense) => {
      setExpensesContext((context) => ({
        ...context,
        expenses: [...context.expenses, newExpense],
      }));
    },
    deleteExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
    searchValue: "",
    searchExpense: (name) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        searchValue: name.toLowerCase(),
      }));
    },
  }));

  return expensesContext;
};

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
