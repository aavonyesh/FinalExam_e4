import React, { createContext, useState } from "react";
export const BasketContext = createContext();
function BasketProvider({ children }) {
  const [basket, setbasket] = useState([]);

  function handleBasket(obj) {
    const isElementExist = basket.find((x) => x._id === obj._id);
    if (isElementExist) {
      isElementExist.count++;
      setbasket([...basket]);
    } else {
      setbasket([...basket, { ...obj, count: 1 }]);
    }
  }
  function removeBasket(id) {
    setbasket(basket.filter((x) => x._id !== id));
  }
  function decreaseBasket(obj) {
    const isElementExist = basket.find((x) => x._id === obj._id);
    if (isElementExist.count === 1) {
      return;
    } else {
      isElementExist.count--;
      setbasket([...basket]);
    }
  }
  function addedBasket(obj) {
    return basket.some(x=>x._id === obj._id)
  }
  return (
    <BasketContext.Provider
      value={{ basket, handleBasket, removeBasket, decreaseBasket,addedBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
