import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { COLOR } from '../../utils/ui-style';

export const SidebarContainer = styled.div`  
  --nav-width: 68px;
  position: fixed;
  top: 0;
  width: var(--nav-width);
  left: 0;
  height: 100vh;
  background-color: ${COLOR.PRIMARY};
  padding: .5rem 1rem 0 0;
  transition: .5s;
  z-index: 100;
  
  @media screen and (min-width: 768px){
    width: calc(var(--nav-width) + 156px);
  }
`;

export const SidebarMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  left: 0;
  padding: 1rem 1rem 0 0;
`;

export const SidebarMenuItem = styled(NavLink)`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: .5rem 0 .5rem 1.5rem;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  color: ${COLOR.PRIMARY_LIGHT};
  margin-bottom: 1.5rem;
  transition: .3s;

  &.selected,
  &:hover {
    color: ${COLOR.WHITE};
  }
`;

export const Logo = styled.a`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: .5rem 0 .5rem 1.5rem;
  margin-bottom: 2rem;
  text-decoration: none;
  color: ${COLOR.WHITE};
  font-weight: 700
`;
