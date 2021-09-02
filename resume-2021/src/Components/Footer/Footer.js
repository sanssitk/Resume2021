import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const linkedinClick = () => {
    return (window.location =
      "https://www.linkedin.com/in/sanjay-shrestha-020986168/");
  };
  const emailClicked = () => {
    return (window.location = "mailto:sanssitk@gmail.com?subject=Hi%20Sanjay");
  };
  const callClicked = () => {
    return (window.location = "+1-469-751-2103");
  };
  const skypeClicked = () => {
    return (window.location = "skype:sanjay.001?chat");
  };
  return (
    <div className="footer">
      <p className="legal__title">
        Sanjay B Shrestha @ {new Date().getFullYear()} All Rights Reserved
      </p>
      <h4>Sanjay B Shrestha</h4>
      <div className="detailIcons">
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "#0077b5" }}
          spin
          onClick={linkedinClick}
        />
        <FontAwesomeIcon
          style={{ color: "#EA4335" }}
          icon={faEnvelope}
          spin
          onClick={emailClicked}
        />
        <FontAwesomeIcon
          style={{ color: "aqua" }}
          icon={faPhoneSquareAlt}
          spin
          onClick={callClicked}
        />
        <FontAwesomeIcon
          onClick={skypeClicked}
          icon={faSkype}
          style={{ color: "#00aff0" }}
          spin
        />
      </div>
    </div>
  );
}

export default Footer;
