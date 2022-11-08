import React from "react";
import { Video } from "../Video";
import videoSrc from "../plays/video2.mp4";
import aboutImg from "../plays/about.jpg";
import '../styles/About.css'
export default function About() {
  return (
    <>
     <div className="about-container">
     <Video videoUrl={videoSrc} />
      <div>
        <section className="about-section">
        <div className="about-inner-text">
          <h1> The Heart of the Designer Community </h1>
         <p>
         We’re on a mission to build the
           world’s best community for creatives to share, grow, and get hired.
         </p>
          </div>
          <div className="about-inner">
            <img src={aboutImg} alt="about-img"/>
          </div>
         
        </section>
      </div>
     </div>
    </>
  );
}
