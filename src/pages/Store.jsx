import React from 'react';
import {NavLink, Outlet} from "react-router-dom"

export default function Store() {
  return (
    <>
    <div>
     <p> <input type={'search'}/></p>
      <NavLink to={'newproduct'}>
        New Product
      </NavLink>
      <NavLink to={'menproduct'}>
        Men Wears
      </NavLink>
      <NavLink to={'womenproduct'}>
        Women Wears
      </NavLink>
    </div>
    <Outlet/>
    </>
  )
}
