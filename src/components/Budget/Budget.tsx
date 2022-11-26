import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";

import { BudgetStyled, HeadStyled } from "./budgetStyled";
import { Title } from "../Title/Title";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";

export const Budget = () => {
  return (
    <BudgetStyled>
      <HeadStyled>
        <Title label={"Budget App"} />
        <CurrencySelect />
      </HeadStyled>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </BudgetStyled>
  );
};
