import React from 'react'
import languages from "../../helper/data"
import Item from '../item/Item'
import "./Card.css"
const Card = () => {
  return (
    <div className="cards-area-container">
    <div className="bars"></div>
    <h1 className="language-title">Languages</h1>
    <div className='cards-container'>

{languages.map((item, index) => {
          return <Item item={item} />;
        })}


</div>
    </div>
  )
}

export default Card