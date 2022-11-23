import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const CurrencySelect = () => {
  const { currentCurrency, currencies, setCurrency } = useCurrencyContext();

  const handlerSelect = (option: SingleValue<typeof currentCurrency>) => {
    if (option) {
      setCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      onChange={handlerSelect}
      value={currentCurrency}
      isSearchable={false}
    />
  );
};
