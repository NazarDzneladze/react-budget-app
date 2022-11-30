import Select from "react-select";
import { useCurrenciesContext } from "../../context/CurrencyContext/CurrencyContext";

export const CustomSelelct = () => {
  const { currencies } = useCurrenciesContext();
  return <Select options={currencies} isSearchable={false} isMulti={false} />;
};
