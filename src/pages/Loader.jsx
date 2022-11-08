import React from 'react';
import '../styles/Loader.css'

export default function Loader() {
  return (
    <div>
        <div className='loader-container'>
            <div className='loader'>
                <div className='loader-dot'></div>
                <div className='loader-dot'></div>
                <div className='loader-dot'></div>
            </div>
        </div>
    </div>
  )
}
