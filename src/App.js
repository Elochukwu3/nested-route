import React from "react";
import{Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import HighFashion from './pages/HighFashion';
import Store from './pages/Store';
import Navbar from './Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="highfashion" element={<HighFashion/>}/>
        <Route path="store" element={<Store/>}/>
       </Routes>
    </div>
  );
}

export default App;
