import Select, { SingleValue } from "react-select";
import { useCurrenciesContext } from "../../context/CurrencyContext/CurrencyContext";

export const CustomSelelct = () => {
  const { currencies, currentCurrency, setNewCurrency } = useCurrenciesContext();

  const handelSelect = (option: SingleValue<typeof currentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      isSearchable={false}
      isMulti={false}
      value={currentCurrency}
      onChange={handelSelect}
    />
  );
};
