import { Badge } from "../Badge/Badge";

interface IProps {
  title: string;
  cost: number;
}

export const ExpensesListItem = ({ title, cost }: IProps) => {
  return (
    <li>
      {title} = {cost}
      <Badge />
    </li>
  );
};
