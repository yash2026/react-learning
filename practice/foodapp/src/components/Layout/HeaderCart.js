import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCart.module.css";
import CartContext from "../../store/cart-context";

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHigh, setbtnHigh] = useState(false);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHigh ? styles.bump : ""} `;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnHigh(true);

    const timer = setTimeout(() => {
      setbtnHigh(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCart;
