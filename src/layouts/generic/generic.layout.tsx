import React, { FC } from 'react';

import { Wrapper } from './generic.style';
type Props = { children?: JSX.Element | JSX.Element[] };

export const GenericLayout: FC<Props> = ({ children }: Props) => (
  <Wrapper>{children}</Wrapper>
);
