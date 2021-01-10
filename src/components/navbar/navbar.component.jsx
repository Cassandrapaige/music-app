import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import { Nav } from "./navbar.styles";

const Navbar = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <Nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </Nav>
  );
};

export default Navbar;
