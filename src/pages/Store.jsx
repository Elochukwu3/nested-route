import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/Store.css";
import { useAuthentication } from "../auth";
import StoreDefault from "../StoreDefault";
export default function Store() {
  const { changeAppearance, display } = useAuthentication();
  return (
    <>
      <section>
        <div className="store-wrapper">
          <div className="cart-container">
            {/* <img src="../women/option_2.png" style={{width: '30px', height: "30px"}}/> */}
           <p> <i className="fas fa-cart-plus"></i></p>
          </div>
          <div>
            <NavLink to={"newproduct"} onClick={changeAppearance}>
              New Product
            </NavLink>
            <NavLink to={"menproduct"} onClick={changeAppearance}>
              Men Wears
            </NavLink>
            <NavLink to={"womenproduct"} onClick={changeAppearance}>
              Women Wears
            </NavLink>
          </div>
        </div>
        <section className="each-new-item">
          {!display ? <StoreDefault/> : <Outlet />}
        </section>
      </section>
    </>
  );
}
