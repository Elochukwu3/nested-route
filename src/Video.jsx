import { useAuthentication } from './auth';
import { useNavigate } from 'react-router-dom';


export const Video = ({videoUrl}) => {
 const {search, changeSearch} = useAuthentication()
  const navigator = useNavigate()
  const searchItems=(e)=>{
    e.preventDefault()
    navigator("/search")
    
  }
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
                <form onSubmit={searchItems}>
                    <i className="fas fa-search"></i>
                <input type={'search'} placeholder={"search"} value={search} onChange={changeSearch}/>

                </form>
            
            </div>
           
        <div className="videoWrap">
         
    <video className="videotag" src={videoUrl}  autoPlay  loop muted playsInline data-hero-video/>
        
        </div>
      </div>
    </>

  )
}
