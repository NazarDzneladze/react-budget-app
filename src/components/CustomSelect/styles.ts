import { StylesConfig } from "react-select";
import { ICurrency } from "../../types";

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
    borderRadius: 5,
    maxHeight: 30,
    maxWidth: 90,
    justifySelf: "end",
  }),
};
