import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title } from "../Title/Title";

export const Budget = () => {
  return (
    <div>
      <Title />
      <CurrencySelect />
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </div>
  );
};
