import React from "react";
import styles from "./Header.module.css";
import HeaderCart from "./HeaderCart";

const image =
  "https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/code/02-adding-a-header-cmp/src/assets/meals.jpg?raw=true";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCart onClick={props.onCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
