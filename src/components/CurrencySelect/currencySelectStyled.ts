import { StylesConfig } from "react-select";
import { ICurrencyOption } from "../../context/CurrencyContext/types";

export const selectStyles: StylesConfig<ICurrencyOption> = {
  control: (styles) => ({
    ...styles,
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    fontWeight: "400",
    border: "1px solid #EEEEEE",
  }),
};
