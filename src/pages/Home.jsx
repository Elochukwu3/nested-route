import React from 'react';
import image from '../plays/img1.jpeg';
import {Video }from "../Video"
import videoSrc from '../plays/video.mp4'
 function Home() {
  return (
    <>
    <Video videoUrl={videoSrc}/>
    <div className='home-container'>
        <img src={image} alt="images"/>
        <img src={image} alt="images"/>
        <img src={image} alt="images"/>
    </div>
    </>
  )
}
export default Home;