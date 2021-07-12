import React, { FC } from 'react';

import { Wrapper } from './generic.style';

export const GenericLayout: FC = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
