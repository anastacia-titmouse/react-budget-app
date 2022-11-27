export interface IBudgetContext {
  budget: number;
  remaining: number;
  spending: number;
  setRemaining: () => void;
  returnRemaining: () => void;
  setSpending: (value: number) => void;
  returnSpending: (value: number) => void;
  setNewBudget: (newBudget: number) => void;
}
