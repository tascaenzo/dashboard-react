import React, { FC } from "react";

import { Application, Page } from "./dashboard.style";
import { Sidebar } from "../../components/Sidebar";

type Props = { children?: JSX.Element | JSX.Element[] };

export const DashboardLayout: FC<Props> = ({ children }: Props) => (
  <Application>
    <Sidebar />
    <Page>{children}</Page>
  </Application>
);
