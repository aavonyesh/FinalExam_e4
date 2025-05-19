import React, { createContext, useState } from 'react'
export const WishlistContext = createContext()
function WishlistProvider({children}) {
    const [favorites, setfavorites] = useState([])
    function addFav(obj){
        const isElementExist = favorites.find(x=>x._id === obj._id)
        if (isElementExist) {
            setfavorites([...favorites])
        }
        else{
            setfavorites([...favorites,{...obj}])
        }
    }

    function removeFav(id){
        setfavorites(favorites.filter(x=>x._id!==id))
    }
    
    function checkFav(obj){
        return favorites.some(x=>x._id === obj._id)
    }
  return (
    <WishlistContext.Provider value={{favorites,addFav,removeFav,checkFav}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider