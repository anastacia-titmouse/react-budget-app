import { createContext, ReactNode, useContext, useState } from "react";

interface IBudgetContextProviderProps {
  children: ReactNode;
}

interface IBudget {
  currency: string;
  budgetSum: number;
}

interface IBudgetContext {
  budget: IBudget[];
  setNewBudget: (budget: IBudget) => void;
}
export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const useBudgetContexValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: [
      {
        budgetSum: 0,
        currency: "$",
      },
    ],
    setNewBudget: (newBudget) => {
      setBudgetContext((context) => ({
        ...context,
        budget: [newBudget],
      }));
    },
  }));
  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return <BudgetContext.Provider value={useBudgetContexValue()}>{children}</BudgetContext.Provider>;
};
