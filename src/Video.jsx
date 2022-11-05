import React from 'react';
import video from './plays/video.mp4'

export const Video = () => {
  return (
  
    <>
    <video className="videotag" src={video}  autoPlay  loop muted/>
    </>

  )
}
