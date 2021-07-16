import React, { FC } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Application, Page, Header } from './dashboard.style';

type Props = { children?: JSX.Element | JSX.Element[] };

export const DashboardLayout: FC<Props> = ({ children }: Props) => {
  return (
    <Application>
      <Sidebar />
      <Header>Header here</Header>
      <Page>{children}</Page>
    </Application>
  );
};
