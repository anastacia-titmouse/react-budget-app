import { createContext, useContext, useState } from "react";
import { IBudgetContext, IBudgetContextProviderProps } from "./types";

export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (newBudget) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: newBudget,
      }));
    },
  }));
  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
