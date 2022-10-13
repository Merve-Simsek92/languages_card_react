import React from 'react'
import { useState } from 'react'
import "./Item.css"
const Item = ({item}) => {
const [showLogo,setShowLogo]=useState(true)
const  {name,img,options}=item

  return (
    <div className='card'  onClick={()=>setShowLogo(!showLogo)}>
      {showLogo ? ( 
      <div >     
      <img className="card-logo"  src={img}/>
      <h1 className='card-title'>{name}</h1>

     </div>) :  (
      <ul className='list'>
        {options.map((option)=> <li>{option}</li>)}

      </ul>
     )
}
 

    </div>
  )
}

export default Item