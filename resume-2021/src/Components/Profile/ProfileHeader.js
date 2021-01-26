import React from "react";

function ProfileHeader() {
  return (
    <div className="profile__header">
      <div className="slider">
        <h2>Profile</h2>
      </div>

      <div className="profile__left">
        <img
          className="profile__image"
          src={process.env.PUBLIC_URL + "sanjay.jpg"}
          alt=""
        />
        <div className="profile__name">
          <h1>Sanjay</h1>
          <h4>Full Stack Software Engineer</h4>
        </div>
      </div>

      <div className="profile__right">
        <ul>
          <li>Name: Sanjay Shrestha</li>
          <li>Exp Years: 5 Years</li>
          <li>Location: Irving, Tx</li>
          <li>
            <a href="/">Download CV</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileHeader;
