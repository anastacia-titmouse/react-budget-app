import { useEffect } from "react";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { StyledSearch } from "./searchStyled";

export const Search = () => {
  const { searchExpense } = useExpensesContext();
  const search = useInput();
  const debounceValue = useDebounce<string>(search.value, 700);
  useEffect(() => {
    searchExpense(debounceValue);
  }, [debounceValue, searchExpense]);

  return <StyledSearch placeholder="search ..." type="search" {...search} />;
};
