import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <p className="legal__title">
        Sanjay B Shrestha @ {new Date().getFullYear()} All Rights Reserved
      </p>
      <h4>Sanjay B Shrestha</h4>
      <div className="detailIcons">
        <a href="https://www.linkedin.com/in/sanjay-shrestha-020986168/">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#0077b5" }}
            spin
          />
        </a>
        <a href="mailto:sanssitk@gmail.com?subject=Hi%20Sanjay">
          <FontAwesomeIcon
            style={{ color: "#EA4335" }}
            icon={faEnvelope}
            spin
          />
        </a>
        <a href="+1-469-751-2103">
          <FontAwesomeIcon
            style={{ color: "aqua" }}
            icon={faPhoneSquareAlt}
            spin
          />
        </a>
        <a href="skype:sanjay.001?chat">
          <FontAwesomeIcon icon={faSkype} style={{ color: "#00aff0" }} spin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
