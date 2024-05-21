import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <h5>Copyright <FontAwesomeIcon icon={faCopyright}/> 2024</h5>
     </footer>
  );
}
export default Footer;
