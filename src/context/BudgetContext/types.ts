import { ReactNode } from "react";

export interface IBudgetContextProviderProps {
  children: ReactNode;
}

export interface IBudgetContext {
  budget: number;
  remaining: number;
  spending: number;
  setRemaining: () => void;
  returnRemaining: (value: number) => void;
  setSpending: (value: number) => void;
  returnSpending: (value: number) => void;
  setNewBudget: (newBudget: number) => void;
}
