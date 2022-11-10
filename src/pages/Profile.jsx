import React, { useRef, useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [image, setImage] = useState({ fileName: "" });
  console.log(image.fileName);
  const file = useRef();
  const chooseImage = () => {
    file.current.click();
  };
  return (
    <div>
      <section className="profile-container">
        <div className="profile-inner">
          <div className="profile-display">
            <div className="profile-user-info">
              <div className="profile-user">
                <div className="profile-image-container">
                  <span onClick={chooseImage}>
                    <i className="fas fa-camera"></i>
                  </span>
                  <img src={"../women/w5.jpeg"} alt="" />
                  <input
                    type={"file"}
                    value={image.fileName}
                    accept={"images/*"}
                    style={{ display: "none" }}
                    ref={file}
                    onChange={(e) =>
                      setImage({ ...image, fileName: e.target.value })
                    }
                  />
                </div>
                <div className="profile-name">
                  <p> Elooo</p>
                  <p className="profile-user-constant">User</p>
                </div>
              </div>
              {/* profile location, user entrance date */}
              <div className="profile-location-container">
                <div className="location-info">
                  <div className="loction-indicator">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span>From</span>
                  </div>
                  <div className="loction-proper">
                    <span>Nigeria</span>
                  </div>
                </div>
                {/* joined   */}
                <div className="location-info">
                  <div className="loction-indicator">
                    <span>
                      <i className="fas fa-user"></i>
                    </span>
                    <span>memeber</span>
                  </div>
                  <div className="loction-proper">
                    <span>Jul 2020</span>
                  </div>
                </div>
              </div>
            </div>
            {/* section two flex */}
            <div className="user-main">
              <div className="user-inner-content">
                <div className="profile-card">
                  <div className="card-content">hello</div>
                  <div className="card-content">hello</div>
                  <div className="card-content">hello</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
