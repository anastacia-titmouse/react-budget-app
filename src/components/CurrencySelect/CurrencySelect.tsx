import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { selectStyles } from "./currencySelectStyled";

export const CurrencySelect = () => {
  const { currentCurrency, currencies, setCurrency } = useCurrencyContext();

  const handleSelect = (option: SingleValue<typeof currentCurrency>) => {
    if (option) {
      setCurrency(option);
    }
  };

  return (
    <Select
      styles={selectStyles}
      options={currencies}
      onChange={handleSelect}
      value={currentCurrency}
      isSearchable={false}
      isMulti={false}
    />
  );
};
