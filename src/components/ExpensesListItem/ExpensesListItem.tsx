import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { ReactComponent as DeleteButton } from "../../assets/icons/close.svg";
import {
  StyledItemBadge,
  StyledItemDelete,
  StyledItemText,
  StyledListItem,
} from "./listItemStyled";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

interface IProps {
  title: string;
  cost: number;
  id: string;
}

export const ExpensesListItem = ({ title, cost, id }: IProps) => {
  const { returnRemaining, returnSpending } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
    returnRemaining();
    returnSpending(cost);
  };
  return (
    <StyledListItem>
      <StyledItemText>{title}</StyledItemText>
      <StyledItemBadge>
        {currentCurrency.value}
        {cost}
      </StyledItemBadge>
      <StyledItemDelete onClick={handleDelete}>
        <DeleteButton />
      </StyledItemDelete>
    </StyledListItem>
  );
};
