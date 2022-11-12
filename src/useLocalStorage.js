
import{ useState, useEffect } from 'react'

function getValue(key, item) {
    let saved = JSON.parse(localStorage.getItem(key))
    if (saved) return saved 
if(item instanceof Function) return item()
return item
}
export default function UseLocalstorage(key, item) {
    const [value, setValue] = useState(()=>{
        return getValue(key, item)
    })
    useEffect(() => {
     key !== "" && localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    
  return ([value, setValue])
}
