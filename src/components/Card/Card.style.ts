import styled from "styled-components";
import { COLOR } from "../../utils/ui-style";

export const CardContainer = styled.div`
  background-color: ${COLOR.SECONDARY_LIGHT};
  min-width: 270px;
  margin: 12px;
  padding: 16px;
  border-radius: 12px;
  //border: solid 1px #c7ced1;
  cursor: pointer;
  transition: .3s;

  &:hover {
    box-shadow: 0 2px 12px 0 rgba(38, 50, 56, 0.2);
  }
`;

export const Row = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: ${COLOR.SECONDARY_DARCK};
  //text-transform: uppercase;
`;

export const Item = styled.div`
  color: ${COLOR.PRIMARY};
`;