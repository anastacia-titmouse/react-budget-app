import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Wrapper } from "./appWrapperstyled";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "./context/ExpensesListContext/ExpensesListContext";
import { Global } from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <CurrencyContextProvider>
      <BudgetContextProvider>
        <ExpensesContextProvider>
          <Global />
          <Wrapper>
            <App />
          </Wrapper>
        </ExpensesContextProvider>
      </BudgetContextProvider>
    </CurrencyContextProvider>
  </>,
);
