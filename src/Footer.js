import React, {useState} from 'react'
import ball from './plays/ball.svg'
import './styles/Footer.css'

export default function Footer() {

  return (
   <footer>
     <div className='footer-comp'>
        <div>
        © 2022 Dribbble. All rights reserved.
        </div>
        <div className='footer-inner'>
        <p>
            19,830,808 shots dribbbled
         Dribbble ball icon
         </p>
         <p>
            <img src={ball} alt='ball'/>
         </p>
        </div>
    </div>
   </footer>
  )
}
