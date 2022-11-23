import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <div>
      <Budget />
      <Expenses />
      <Form />
    </div>
  );
};
