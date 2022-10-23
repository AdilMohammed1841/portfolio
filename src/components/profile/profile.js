import React from "react";
import "./profile.css";
import me from "../../assets/me.png";
import about from "../../assets/me-about.jpg";
import { loremText } from "../../consts/navConst";

const Profile = () => {
  return (
    <div className="profile-container marginised">
      <div className="left-profile">
        <img src={me} width="50%" alt="" />
      </div>
      <div className="right-profile">
        <p>{loremText}</p>
        <img src={about} width="67%" alt="" />
      </div>
    </div>
  );
};

export default Profile;
