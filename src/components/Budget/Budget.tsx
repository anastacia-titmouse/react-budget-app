import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";

export const Budget = () => {
  return (
    <div>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </div>
  );
};
