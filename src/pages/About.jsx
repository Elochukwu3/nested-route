import React from 'react';
import {Video }from "../Video";
import videoSrc from '../plays/video2.mp4'
export default function About() {
  return (
    <>
    <Video videoUrl={videoSrc}/>
    <div>About</div>
    </>
  )
}
