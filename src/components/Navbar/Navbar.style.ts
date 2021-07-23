import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 58px;
  padding: 25px;
  padding-left: 40px;
  padding-right: 40px;
  //background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavbarItem = styled.div`
  display: flex;
  grid-template-columns: max-content max-content;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const AvatarUser = styled.img`
  height: 48px;
  width: 48px;
  margin-top: 12px;
`;
