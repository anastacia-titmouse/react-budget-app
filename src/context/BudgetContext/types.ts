import { ReactNode } from "react";

export interface IBudgetContextProviderProps {
  children: ReactNode;
}

export interface IBudgetContext {
  budget: number;
  setNewBudget: (newBudget: number) => void;
}
