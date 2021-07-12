import styled from 'styled-components';

export const Application = styled.div`
  --nav-width: 68px;
  height: 100vh;
  margin-left: var(--nav-width);
  transition: .5s;

  @media screen and (min-width: 768px){
    margin-left: calc(var(--nav-width) + 156px);
  }
`;

export const Header = styled.header`
  height: 68px;
  background-color: yellow;
  //box-shadow: 0 1px 0 0 #eaedf3;
`;

export const Page = styled.main`
  background-color: red;
`;
