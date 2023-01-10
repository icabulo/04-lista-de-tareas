import React from "react";
import freeCodeCampLogo from "../images/freecodecamp-logo.png";
import "../stylesheets/LogoFCC.css";

function LogoFCC() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        alt="Logo de freeCodeCamp"
        className="freecodecamp-logo"
      />
    </div>
  );
}

export default LogoFCC;
