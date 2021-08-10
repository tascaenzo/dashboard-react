import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { COLOR } from "../../utils/ui-style";

export const SearchIcon = styled(BiSearch)`
  color: ${COLOR.SECONDARY_DARCK};
  cursor: pointer;
  transition: 0.3s;
  font-size: 18px;

  &:hover {
    transform: scale(1.4);
  }
`;

export const SerchBarContainer = styled.div`
  display: flex;
  background-color: ${COLOR.SECONDARY_LIGHT};
  height: 40px;
  justify-content: space-around;
  align-items: center;
  margin: 8px 24px 0;
  padding: 8px 9px 8px 17px;
  border-radius: 20px;
  border: none;
  transition: 0.3s;

  &:hover,
  :focus {
    box-shadow: 0 2px 12px 0 rgba(38, 50, 56, 0.2);
    outline: none;
  }
`;

export const SerchBar = styled.input`
  border: none;
  background-color: ${COLOR.SECONDARY_LIGHT};
  color: ${COLOR.SECONDARY_DARCK};

  &:hover,
  :focus {
    outline: none;
  }
`;
