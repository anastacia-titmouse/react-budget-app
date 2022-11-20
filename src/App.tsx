import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Title } from "./components/Title/Title";

export const App = () => {
  return (
    <div>
      <Title />
      <Budget />
      <Expenses />
      <Form />
    </div>
  );
};
