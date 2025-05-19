import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketProvider";

function Basket() {
  const { basket,removeBasket,handleBasket,decreaseBasket } = useContext(BasketContext);
  return (
    <>
      <h1>Basket</h1>
      <div>
        {basket.map((x) => (
          <div key={x._id}>
            <img src={x.image} width={"200px"} />
            <h3>{x.name}</h3>
            <p>${x.price}</p>
            <button onClick={()=>decreaseBasket(x)}>---</button>
            <span>say:{x.count}</span>
            <button onClick={()=>handleBasket(x)}>+++</button>
            <button onClick={()=>removeBasket(x._id)}>remove</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Basket;
