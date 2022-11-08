import React from 'react';
import videoSrc from "../plays/viedeo3.mp4";
import { Video } from "../Video";
import {designer} from '../designer-object.js';
import '../styles/Home.css';

export default function HighFashion() {
  return (
    <div>
      <Video videoUrl={videoSrc} />
      <div>
      <div className='home-images-wrapper'>
      {
        designer.length && designer.map(({mainImg, miniText, hoverText, miniImg, miniBtn}, index)=>{
          return (<div key={index}>
            <button>case Study</button>
          <img src={mainImg} alt="images" className='home-img'/>
          <div className='image-text'>
             <div><p>{hoverText}</p></div>
             <div>
            <span className='image-text-heart'>&#10084;</span>
          </div>
          </div>
          <div className='mini-view-section'>
            <div className='mini-image-section'>
              <span><img src={miniImg} alt='profile'/></span>
              <span>{miniText}</span>
              <span className='mini-btn-pro'>{miniBtn}</span>
            </div>
            <div>
              <p><span className='heart'>&#10084;</span>
              <span>80</span>
              </p>
              <p>
              <span className='eye'>&#128065;</span>
              <span>5.7k</span>
              </p>
            </div>
          </div>
          </div>)
        })
      }
    </div>
      </div>
    </div>
  )
}
