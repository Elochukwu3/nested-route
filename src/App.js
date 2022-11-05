import React from "react";
import{Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import HighFashion from './pages/HighFashion';
import Store from './pages/Store';
import NewProduct from './pages/NewProduct';
import MenProduct from './pages/MenProduct';
import WomenProduct from './pages/WomenProduct';
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
        <Route path="store" element={<Store/>}>
          <Route path="newproduct" element={<NewProduct/>}/>
          <Route path="menproduct" element={<MenProduct/>}/>
          <Route path="womenproduct" element={<WomenProduct/>}/>
        </Route>
       </Routes>
    </div>
  );
}

export default App;
