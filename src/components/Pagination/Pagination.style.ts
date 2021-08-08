import styled from "styled-components";
import { COLOR } from "../../utils/ui-style";

export const PaginationContainer = styled.div`
  display: flex;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.span`
  text-align: center;
  height: 28px;
  width: 28px;
  padding: 6px;
  margin: 4px;
  border-radius: 50%;
  color: ${COLOR.BLACK};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.PRIMARY};
    color: ${COLOR.WHITE};
  }

  &.active {
    background-color: ${COLOR.PRIMARY};
    color: ${COLOR.WHITE};
  }

`;