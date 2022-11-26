import { TitleStyled } from "./titleStyled";
interface IProps {
  label: string;
}

export const Title = ({ label }: IProps) => {
  return <TitleStyled>{label}</TitleStyled>;
};
