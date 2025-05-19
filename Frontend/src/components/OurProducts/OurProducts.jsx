import React, { useContext, useEffect, useState } from "react";
import styles from "../OurProducts/style.module.css";
import axios from "axios";
import { BasketContext } from "../../context/BasketProvider";
import { WishlistContext } from "../../context/WishlistProvider";
import { Link } from "react-router-dom";

function OurProducts() {
  const [myData, setmyData] = useState([]);
  const [search, setsearch] = useState("");
  const [mySort, setmySort] = useState({
    property: "",
    order: true,
  });
  const {handleBasket,addedBasket,removeBasket} = useContext(BasketContext)
  const {addFav,removeFav,checkFav} = useContext(WishlistContext)
  const URL = "http://localhost:3000";
  async function readData() {
    try {
      const res = await axios.get(URL);
      setmyData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    readData();
  }, []);
  return (
    <div className={styles.cards}>
      {myData.map((item) => (
        <div className={styles.card}>
          <img src={item.image} width={"200px"} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <div>
            <Link to={`/detail/${item._id}`}><button >detail</button></Link>
            <li>{addedBasket(item) ? <button onClick={()=>removeBasket(item._id)}>remove</button> : <button onClick={()=>handleBasket(item)}>add basket</button> }</li>

            <li>{checkFav(item) ? <button onClick={()=>removeFav(item._id)}>remove</button> : <button onClick={()=>addFav(item)}>add fav</button>}</li>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurProducts;
