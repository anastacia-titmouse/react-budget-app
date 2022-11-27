import styled from "styled-components";

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr;
  grid-template-rows: 20px;
  align-items: center;
  gap: 20px;
  padding: 15px 20px;
  border-bottom: 2px solid #ccd5ff;
  @media (max-width: 390px) {
    font-size: 12px;
    padding: 12px 15px;
  }
`;

export const StyledItemText = styled.p`
  text-transform: lowercase;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const StyledItemBadge = styled.span`
  justify-self: center;
  background-color: #23c9ff;
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 12px;
  color: #fff;
`;

export const StyledItemDelete = styled.span`
  justify-self: center;
  display: block;
  width: 10px;
  height: 10px;
`;
