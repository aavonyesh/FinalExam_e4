import React, { useContext } from "react";
import styles from "../Navbar/style.module.css";
import { Link } from "react-router-dom";
import { BiHealth } from "react-icons/bi";
import { BasketContext } from "../../context/BasketProvider";
import { WishlistContext } from "../../context/WishlistProvider";
function Navbar() {
  const { basket } = useContext(BasketContext);
  const {favorites} = useContext(WishlistContext)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo_icon}>
          <div className={styles.icon}>
            <BiHealth />
          </div>
          <div className={styles.logo}>NATURAL COSMETIC</div>
        </div>
        <div className={styles.links}>
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/about"}>About</Link>
          </div>
          <div>
            <Link to={"/shop"}>Shop</Link>
          </div>
          <div>
            <Link to={"/basket"}>Basket {basket.length}</Link>
          </div>
          <div>
            <Link to={"/wishlist"}>Wishlist {favorites.length}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
