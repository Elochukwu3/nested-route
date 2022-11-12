import React, { useRef, useState } from "react";
import "../styles/Profile.css";
import icon1 from "../icons/app_development.svg";
import icon2 from "../icons/data_analyst.svg";

const Profile = () => {
  const [image, setImage] = useState({ fileName: "" });
  const file = useRef();
  const chooseImage = () => {
    file.current.click();
    console.log(file.current);
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
                  <h4> Elochukwu Oguaju</h4>
                  <p className="profile-user-constant">User: Ogu1919919</p>
                </div>
              </div>
              {/* profile location, user entrance date */}
              <div className="profile-location-container">
                <div className="location-info">
                  <div className="loction-indicator">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span style={{fontSize:".760em"}}>From</span>
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
                    <span style={{fontSize:".760em"}}>member</span>
                  </div>
                  <div className="loction-proper">
                    <span>Jul 2020</span>
                  </div>
                </div>
                <div className="featured-tags">
                    <h4>Featured Tags</h4>
                    <div>
                      <span>dexi</span>
                      <span>cute</span>
                      <span>bags</span>
                      <span>teddy</span>
                      <span>stock</span>
                      <span>XE Rate</span>
                      <span>Gilead</span>
                      <span>menu</span>
                      <span>gell</span>
                      <span>web3.0</span>
                    </div>
                </div>
                <div className="welcome-profile">
                  <button>Welcome</button>
                </div>
              </div>
            </div>
            {/* section two flex */}
            <div className="user-main">
              <div className="user-inner-content">
                <div className="profile-card">
                  <div className="card-content cont-one">
                    <img src={icon1} alt="how" />
                    <h3>Stock</h3>
                  </div>
                  <div className="card-content cont-two">
                    <img src={icon2} alt="iconss" />
                    <h3>Trade Graph</h3>
                  </div>
                  <div className="card-content cont-three">
                    <img src={icon2} alt="iconss" />
                    <h3>Board</h3>
                  </div>
                </div>
                <div className="section-wrapper">
                  <marquee direction="left">
                  
                      <div className="board-animation">
                        <p>AAPl</p>
                        <p>BRK-B</p>
                        <p>DIS</p>
                        <p>GE</p>
                        <p>HD</p>
                        <p>NIKE</p>
                        <p>SBUX</p>
                        <p>DOWJ</p>
                      </div>

                  </marquee>
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
