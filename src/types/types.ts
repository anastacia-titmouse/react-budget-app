export interface IBudgetContext {
  budget: number;
  remaining: number;
  spending: number;
  setRemaining: () => void;
  setSpending: (value: number) => void;
  setNewBudget: (newBudget: number) => void;
}
