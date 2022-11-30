export enum Currency {
  USD = "$",
  EUR = "€",
  GBR = "£",
}

export interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

export interface ICurrencyContext {
  currencies: ICurrency[];
}
