import React from 'react';


export const Video = ({videoUrl}) => {
  return (
  
    <>
    <div className="backgroundVideo">
            <div className="btns">
           <p> <button>Discover</button></p>
         <p><button>Animations</button> </p>
           <p> <button>Direction</button> </p>
           <p> <button>Article</button> </p>
           <p> <button>Designer</button> </p>
           <p> <button>FootWears</button> </p>
           <p> <button>Brands</button> </p>
           <p> <button>Blog</button> </p>
            </div>
            <div className="navText">
                <h2>Explore the world’s leading</h2>
                <h2>design portfolios</h2>
                <div>
                    <p>Millions of designers and agencies around the world showcase their portfolio work</p>
                 <p>on Dribbble - the home to the world’s best design and creative professionals</p>
                </div>
                <form>
                    <i className="fas fa-search"></i>
                <input type={'search'} placeholder={"search"}/>

                </form>
            
            </div>
           
        <div className="videoWrap">
         
    <video className="videotag" src={videoUrl}  autoPlay  loop muted playsInline data-hero-video/>
        
        </div>
      </div>
    </>

  )
}
