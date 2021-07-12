import React, { FC } from 'react';
import { Sidebar } from '../../components/Sidebar';

import { Application, Page, Header } from './dashboard.style';

export const DashboardLayout: FC = ({ children }) => {
  return (
    <Application>
      <Sidebar />
      <Header>Header here</Header>
      <Page>{children}</Page>
    </Application>
  );
};
