import { Title } from "../Title/Title";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { Search } from "../Search/Search";
import { StyledExpenses } from "./expensesStyled";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title label={"Expenses"} />
      <Search />
      <ExpensesList />
    </StyledExpenses>
  );
};
