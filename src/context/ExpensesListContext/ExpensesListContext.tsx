import { createContext, ReactNode, useContext, useState } from "react";
import { isContext } from "vm";

interface IExpensesContextProviderProps {
  children: ReactNode;
}

interface IExpense {
  id: string;
  title: string;
  cost: number;
}

interface IExpensesContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
}

export const ExpensesContext = createContext<IExpensesContext>(
  {} as IExpensesContext
);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(
    () => ({
      expenses: [
        {
          id: "21324",
          title: "apples",
          cost: 15,
        },
      ],
      setNewExpense: (newExpense) => {
        setExpensesContext((context) => ({
          ...context,
          expenses: [...context.expenses, newExpense],
        }));
      },
    })
  );

  return expensesContext;
};

export const useExpensesContext = () =>
  useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider = ({
  children,
}: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
