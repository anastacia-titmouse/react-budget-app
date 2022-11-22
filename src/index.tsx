import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Wrapper } from "./appWrapperstyled";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { ExpensesContextProvider } from "./context/ExpensesListContext/ExpensesListContext";
import { Global } from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <BudgetContextProvider>
      <ExpensesContextProvider>
        <Global />
        <Wrapper>
          <App />
        </Wrapper>
      </ExpensesContextProvider>
    </BudgetContextProvider>
  </>,
);
