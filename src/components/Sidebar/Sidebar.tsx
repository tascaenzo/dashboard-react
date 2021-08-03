import React, { FC } from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  Logo,
} from "./Sidebar.style";
import {
  BiLayer,
  BiGridAlt,
  BiUser,
  BiMessage,
  BiFolder,
  BiBarChart,
  BiLogOut,
} from "react-icons/bi";
import { COLOR } from "../../utils/ui-style";

const Sidebar: FC = () => (
  <SidebarContainer>
    <SidebarMenu>
      <div>
        <Logo>
          <BiLayer size="25" color={COLOR.WHITE}/>
          <span>Logo</span>
        </Logo>

        <SidebarMenuItem to="/" exact activeClassName="selected">
          <BiGridAlt size="22" />
          <span>Dashboard</span>
        </SidebarMenuItem>

        <SidebarMenuItem to="/users" exact activeClassName="selected">
          <BiUser size="22" />
          <span>Users</span>
        </SidebarMenuItem>

        <SidebarMenuItem to="/test" activeClassName="selected">
          <BiMessage size="22" />
          <span>Messages</span>
        </SidebarMenuItem>

        <SidebarMenuItem to="/data" activeClassName="selected">
          <BiFolder size="22" />
          <span>Data</span>
        </SidebarMenuItem>

        <SidebarMenuItem to="#">
          <BiBarChart size="22" />
          <span>Analytics</span>
        </SidebarMenuItem>
      </div>

      <SidebarMenuItem to="#">
        <BiLogOut size="22" />
        <span>Log Out</span>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContainer>
);

export default Sidebar;
