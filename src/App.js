import React, {useState} from "react";
import {AuthProvider} from './auth'
import{Routes, Route} from "react-router-dom"
import About from './pages/About';
import Profile from './pages/Profile';
import HighFashion from './pages/HighFashion';
import Store from './pages/Store';
import NewProduct from './pages/NewProduct';
import MenProduct from './pages/MenProduct';
import WomenProduct from './pages/WomenProduct';
import ErrorPage from './pages/ErrorPage';
import {SignIn} from './pages/SignIn';
import Navbar from './Navbar'
import {AuthProfile} from './AuthProfile';
import arrow from './plays/arrow.png'
import Footer from "./Footer";
const LazyHome = React.lazy(()=> import('./pages/Home'))



function App() {
  const[scroll, setScroll] = useState(false)
  const checkScroll =()=>{
      if (!scroll && window.pageYOffset > 400) {
         setScroll(true) 
      }else if(scroll && window.pageYOffset <= 400){
          setScroll(false)
      }
  }
  window.addEventListener("scroll", checkScroll)
  return (
    <div className="App" id="top">
      <section>
      <AuthProvider>
     <Navbar/>
       <Routes>
        <Route path="/" element={<React.Suspense fallback={"loading..."}><LazyHome/></React.Suspense>}/>
        <Route path="about" element={<About/>}/>
        <Route path="profile" element={<AuthProfile><Profile/></AuthProfile>}/>
        <Route path="highfashion" element={<HighFashion/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="signin" element={<SignIn />}/>
        <Route path="store" element={<Store/>}>
          <Route path="newproduct" element={<NewProduct/>}/>
          <Route path="menproduct" element={<MenProduct/>}/>
          <Route path="womenproduct" element={<WomenProduct/>}/>
        </Route>
       </Routes>
     </AuthProvider>
     <a href="#top" className="topIcon" style={{display: scroll ? "block": "none"}}>
      <img src={arrow} alt='arrow'/>
     </a>
     <Footer/>
     
      </section>
    </div>
  );
}

export default App;
