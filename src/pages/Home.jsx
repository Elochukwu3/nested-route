import React, {useState} from 'react';
import mini from '../plays/mini-img1.jpeg';
import {Video }from "../Video"
import videoSrc from '../plays/video.mp4'
import '../styles/Home.css'
import {product} from '../objects.js'
 function Home() {
  const [selectedValue, setSelectedValue] = useState('product')
  const productArray = product.filter(e=>{
    return e.id === selectedValue;
  })
  
  console.log(productArray);
  return (
    <>
    <Video videoUrl={videoSrc}/>
    <section className='home-section'>
    <main className='home-section-main'>
      <div className='select-div-wrapper'>
        <select id='items' className='home-selections' onChange={(e)=>setSelectedValue(e.target.value)}>
        <option value={'product'}>Popular</option>
          <option value={'item2'}>Designs</option>
          <option value={'stocks'}>Stock</option>
        </select>
      </div>
    <div className='home-images-wrapper'>
      {
        productArray.length && productArray.map(({mainImg, miniText, hoverText, miniImg, miniBtn})=>{
          return (<div>
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
    </main>
    </section>
  
    </>
  )
}
export default Home;