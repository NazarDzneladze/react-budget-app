import { ICurrency } from "context/CurrencyContext/types";
import { StylesConfig } from "react-select";

export const styles: StylesConfig<ICurrency> = {
  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,

    color: "#000000",
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    justifySelf: "end",

    maxHeight: 30,
    maxWidth: 90,

    borderRadius: 5,
  }),
};
