import React, {useState} from 'react';
import image from '../plays/img1.jpeg';
import mini from '../plays/mini-img1.jpeg';
import {Video }from "../Video"
import videoSrc from '../plays/video.mp4'
import '../styles/Home.css'
 function Home() {
  const [selectedValue, setSelectedValue] = useState('')
  return (
    <>
    <Video videoUrl={videoSrc}/>
    <section className='home-section'>
    <main className='home-section-main'>
      <div className='select-div-wrapper'>
        <select id='items' className='home-selections' onChange={(e)=>setSelectedValue(e.target.value)}>
        <option value={'item1'}>Popular</option>
          <option value={'item2'}>Designs</option>
          <option value={'item3'}>Stock</option>
        </select>
      </div>
    <div className='home-images-wrapper'>
        <div>
          <button>case Study</button>
        <img src={image} alt="images" className='home-img'/>
        <div className='image-text'>
           <div><p>Crypto City/ Web site design</p></div>
           <div>
          {/* <span></span> */}
          <span className='image-text-heart'>&#10084;</span>
        </div>
        </div>
        <div className='mini-view-section'>
          <div className='mini-image-section'>
            <span><img src={mini} alt='profile'/></span>
            <span>Mike | Creative Mint</span>
            <spn className='mini-btn-pro'>Pro</spn>
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
        </div>
        {/* <div>
        <img src={image} alt="images" className='home-img'/>
        </div>
  
        <div>
        <img src={image} alt="images" className='home-img'/>
        </div> */}
  
    </div>
    </main>
    </section>
  
    </>
  )
}
export default Home;