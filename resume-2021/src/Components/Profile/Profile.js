import React from "react";
import "./Profile.css";
import PersonIcon from "@material-ui/icons/Person";
import Accordion from "../Accordion/Accordion";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";

function Profile() {
  return (
    <Accordion
      color="#4ca5d0"
      icon={<PersonIcon />}
      title="Profile"
      header={<ProfileHeader />}
      body={<ProfileBody />}
    />
  );
}

export default Profile;
