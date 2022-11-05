import React from 'react';
import {NavLink} from "react-router-dom"

export default function Store() {
  return (
    <div>
     <p> <input type={'search'}/></p>
      <NavLink>
        New Product
      </NavLink>
      <NavLink>
        Men Wears
      </NavLink>
      <NavLink>
        Women Wears
      </NavLink>
    </div>
  )
}
