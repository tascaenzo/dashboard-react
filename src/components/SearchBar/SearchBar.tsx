import React from "react";
import { SearchIcon, SerchBar, SerchBarContainer } from "./SearchBar.style";

const SearchBar = (): JSX.Element => (
  <SerchBarContainer>
    <SerchBar placeholder="Cerca" />
    <SearchIcon />
  </SerchBarContainer>
);

export default SearchBar;
