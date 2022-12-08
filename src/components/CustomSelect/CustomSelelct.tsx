import { useCurrenciesContext } from "context";
import Select, { SingleValue } from "react-select";
import { styles } from "./styles";

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
      styles={styles}
    />
  );
};
