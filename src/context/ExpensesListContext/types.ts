import { ReactNode } from "react";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpense {
  id: string;
  title: string;
  cost: number;
}

export interface IExpensesContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
  searchExpense: (name: string) => void;
  searchValue: string;
}
