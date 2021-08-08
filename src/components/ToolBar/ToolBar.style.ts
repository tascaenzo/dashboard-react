import styled from "styled-components";
import { COLOR } from "../../utils/ui-style";

export const ToolBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Item = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const SerchBarr = styled.input`
  background-color: ${COLOR.SECONDARY_LIGHT};
  height: 40px; 
  margin: 8px 24px 0;
  padding: 8px 9px 8px 17px;
  border-radius: 20px;
  border: none;
  transition: 0.3s;

  &:hover, :focus{
    box-shadow: 0 2px 12px 0 rgba(38, 50, 56, 0.2);
    outline: none;

  }
`;