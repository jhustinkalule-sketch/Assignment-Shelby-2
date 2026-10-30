import React from 'react'
import { useSelector } from 'react-redux'
import Cartproduct from './Cartproduct';


const Leftside = () => {
    const cart= useSelector((state)=>state.cart);

  return (
    <div>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add something finger lickin’ good.</p>
        ) : (
          cart.map((item) => (
            <Cartproduct key={item.id ?? item._id ?? item.title} {...item} />
          ))
        )}
    </div>
  )
}

export default Leftside