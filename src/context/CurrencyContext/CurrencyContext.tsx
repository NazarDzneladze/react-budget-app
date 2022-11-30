import { createContext, useContext, useState } from "react";
import { Currency, ICurrencyContext } from "../../config/Currency";
import { ICurrencyContextProviderProps } from "../../types";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    currencies: [
      {
        label: "USD",
        value: Currency.USD,
      },
      {
        label: "EUR",
        value: Currency.EUR,
      },
      {
        label: "GBR",
        value: Currency.GBR,
      },
    ],
  }));

  return currencyContext;
};

export const useCurrenciesContext = () => useContext(CurrencyContext);

export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
