import { createContext, ReactNode, useContext, useState } from "react";
import { IBudgetContext } from "../../types/types";

interface IBudgetContextProviderProps {
  children: ReactNode;
}

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
    remaining: 0,
    setRemaining: () => {
      setBudgetContext((ctx) => ({
        ...ctx,
        remaining: ctx.budget - ctx.spending,
      }));
    },
    returnRemaining: () => {
      setBudgetContext((ctx) => ({
        ...ctx,
        remaining: ctx.remaining + ctx.spending,
      }));
    },
    spending: 0,
    setSpending: (value) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        spending: ctx.spending + value,
      }));
    },
    returnSpending: (value) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        spending: ctx.spending - value,
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
