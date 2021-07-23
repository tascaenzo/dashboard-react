import styled from "styled-components";

export const Application = styled.div`
  --nav-width: 68px;
  height: 100vh;
  margin-left: var(--nav-width);
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    margin-left: calc(var(--nav-width) + 156px);
  }
`;

export const Page = styled.main`
  margin: 25px;
`;
