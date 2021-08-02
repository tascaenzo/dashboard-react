import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
`;

export const Tbody = styled.div`
  margin: 8px;
`;

export const Thead = styled.div`
  border-radius: 8px;
  background-color: #f8f8f8;
  //margin-bottom: 20px;
`;

export const Tr = styled.div`
  display: flex;
  align-items: center;
`;

export const TrBody = styled(Tr)`
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  height: 54px;
  transition: all ease-in-out 300ms;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const Th = styled.div`
  padding: 8px;
  width: 100%;
  text-transform: uppercase;
`;

export const Td = styled.div`
  padding: 6px;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;
