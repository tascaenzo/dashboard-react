import styled from 'styled-components';

// Ref: https://www.joshwcomeau.com/css/full-bleed/
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
`;

export const FullBlend = styled.div`
  width: 100%;
  grid-column: 1 / 4;
`;
