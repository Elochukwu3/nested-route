import React from 'react'
import Mapping from './Mapping';
import { men } from '../objects';

export default function MenProduct() {
  return (
    <div>
      <Mapping item= {men} header={"Men Wears"}/>
    </div>
  )
}
