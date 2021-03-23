import React from "react";
import c from "./UserProfile.module.css";

const UserProfile = (props) => {
  return (
    <div className={c.profile_info}>
      <img
        className={c.headerImg}
        src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
      />
      <h1>My Profile</h1>
      <img
        className={c.avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"
      />
      <div className={c.user_info}>
        Goncharov Nikita Vladimirovich <br />
        27.01.2004 <br />
        GODEN <br />
      </div>
    </div>
  );
};

export default UserProfile;
