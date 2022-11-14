import { useState } from "react"
import { useAuthentication } from "../auth"


export default function Search() {
    const {search, changeSearch} = useAuthentication()
    const[mainSearch, setMainSearch]= useState('')
   console.log(mainSearch);
    
    
  return (
    <div>
        <input value={search ? search: mainSearch} onChange={(e)=>{setMainSearch(e.target.value)}}/>
        <div>{search}</div>
    </div>
  )
}
