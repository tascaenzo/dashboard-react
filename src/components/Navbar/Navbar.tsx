import React, { FC } from "react";
import { NavbarContainer, NavbarItem, AvatarUser } from "./Navbar.style";

const Navbar: FC = () => (
  <NavbarContainer>
      <NavbarItem>Ciao</NavbarItem>
      <NavbarItem>
        <AvatarUser src={`/assets/avatar-boy.webp`} />
      </NavbarItem>
  </NavbarContainer>
);

export default Navbar;
