import React from "react";
import { useStateValue } from "../../StateManagement/StateProvider";

function ProfileHeader() {
  const [{ profileIsOpen }] = useStateValue();
  
  const profileImgStyle = () => {
    const profileImg = {height : ""};
    profileIsOpen ? profileImg.height = "120px" : profileImg.height = "95px";
    return profileImg;
  }
  return (
    <div className="profile__header">
      <div className="profile__left">
        <div className="profile__image">
          <img
            src={`${process.env.PUBLIC_URL}/sanjay.jpg`}
            alt="profileImage"
            style={profileImgStyle()}
          />
        </div>

        <div className="profile__name">
          <h1>Sanjay</h1>
          <h4>Full Stack Software Engineer</h4>
        </div>
      </div>

      <div
        className={profileIsOpen ? "isOpen profile__right" : "profile__right"}
      >
        <ul>
          <li>Name: Sanjay Shrestha</li>
          <li>Exp Years: 4 Years</li>
          <li>Location: Irving, Tx</li>
          <li>
            <a href={process.env.PUBLIC_URL + "/Sanjay_Js_Resume2021.docx"}>Download CV</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileHeader;
