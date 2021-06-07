import React from "react";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";

function ProfileContainer() {
  return (
    <div className="profile__container">
      <ProfileHeader />
      <ProfileBody />
    </div>
  );
}

export default ProfileContainer;
