import React, { useState } from 'react'
import './style.css'
function Products({data}) {
  const [cart,cartSet]=useState([])
  const an=[]


  return (
 <div>
     <div className='listProduct'>

{data.map((el, index)=>(
    <div className='index'>
        <img key={el.id} src={el.image} alt=""></img> 
        <li key={el.id}> {el.title}</li>
        <li key={el.id}>{el.price} $</li>
        <button key={el.id} onClick={()=>{
          const value={
            "image":el.image
            ,"title":el.title,
            "price":el.price
          }
          an.push(value)
          cartSet(an)
          console.log(cart);

        }}>ADD</button>
    </div>
))}
</div>
<div>
  {cart.map((el)=>(
        <div className='index'>
        <img key={el.id} src={el.image} alt=""></img> 
        <li key={el.id}> {el.title}</li>
        <li key={el.id}>{el.price} $</li>
        </div>
  ))}
</div>
 </div>
  )
}

export default Products