import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistProvider'

function Wishlist() {
  const {favorites,removeFav} =  useContext(WishlistContext)
  return (
    <div>
        {favorites.map(x=>(
            <div>
                <img src={x.image} width={"200px"} />
                <h3>{x.name}</h3>
                <p>${x.price}</p>
                <button onClick={()=>removeFav(x._id)}>remove</button>
            </div>
        ))}
    </div>
  )
}

export default Wishlist