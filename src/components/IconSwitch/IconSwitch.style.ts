import styled from "styled-components";
import { COLOR } from "../../utils/ui-style";

export const SwitchContainer = styled.div`
  display: table;
  border-radius: 3px;
  border: solid 1px ${COLOR.SECONDARY};
  font-size: 24px;
`;

export const SwitchIconItem = styled.div`
  display: table-cell;
  padding: 4px 4px 0px 4px;
  color: ${COLOR.PRIMARY_DARCK};
  cursor: pointer;
  transition: 0.3s;

  &.selected {
    background-color: ${COLOR.PRIMARY_LIGHT};
    color: ${COLOR.WHITE};
  }

  &:hover {
    background-color: ${COLOR.PRIMARY_LIGHT};
    color: ${COLOR.WHITE};
  }
`;
