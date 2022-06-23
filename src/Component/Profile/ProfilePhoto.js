import React from "react";
import pic from "../../Images/pic.jpg";

function ProfilePhoto() {
  return (
    <div>
      <img
        src={pic}
        alt="Profile Pic"
        style={{
          width: "650px",
          height: "350px",
          borderRadius: "8px",
          padding: "5px",
          border: "1px solid #ddd"
        }}
      />
    </div>
  );
}

export default ProfilePhoto;
