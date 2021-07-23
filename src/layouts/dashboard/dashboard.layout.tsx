import React, { FC } from "react";

import { Application, Page } from "./dashboard.style";
import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar";

type Props = { children?: JSX.Element | JSX.Element[] };

export const DashboardLayout: FC<Props> = ({ children }: Props) => (
  <Application>
    <Sidebar />
    <Navbar />
    <Page>{children}</Page>
  </Application>
);
