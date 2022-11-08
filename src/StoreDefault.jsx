import React from 'react'
import Mapping from './pages/Mapping';
import { storeDefaultItems } from './designer-object';

export default function StoreDefault() {
  return (
    <div>
        <section>
            <Mapping item={storeDefaultItems}/>
        </section>
    </div>
  )
}
