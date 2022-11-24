import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import { RemainingCardStyled } from "../RemainingCard/remainingStyled";
import { SpentcardStyled } from "../SpentCard/spentCardStyled";
import { Title } from "../Title/Title";
import { BudgetStyled, HeadStyled } from "./budgetStyled";

export const Budget = () => {
  return (
    <BudgetStyled>
      <HeadStyled>
        <Title />
        <CurrencySelect />
      </HeadStyled>
      <BudgetCard />
      <RemainingCardStyled />
      <SpentcardStyled />
    </BudgetStyled>
  );
};
