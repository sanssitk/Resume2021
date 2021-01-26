import React from "react";
import "./Profile.css";
import PersonIcon from '@material-ui/icons/Person';
import ProfileContainer from "./ProfileContainer";

function Profile() {
  return (
    <div className="profile">
      <div className="icon">
        <PersonIcon />
      </div>
      <ProfileContainer />
    </div>
  );
}

export default Profile;
