import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { ICurrencyContectProviderProps, ICurrencyContext, ICurrencyOption } from "./types";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    currentCurrency: { value: Currency.USD, label: "USD" },
    currencies: [
      { value: Currency.USD, label: "USD" },
      { value: Currency.EUR, label: "EUR" },
      { value: Currency.GBR, label: "GBR" },
      { value: Currency.BYN, label: "BYN" },
    ],
    setCurrency: (currentCurrency: ICurrencyOption) => {
      setCurrencyContext((ctx) => ({
        ...ctx,
        currentCurrency,
      }));
    },
  }));
  return currencyContext;
};

export const useCurrencyContext = () => useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: ICurrencyContectProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
