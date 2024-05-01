"use client";
import ShoppingCartClientContainer from "./shopping-cart-client-container";
import styles from "./shopping-cart.module.scss";

const ShoppingCart = () => {
  // const items =
  //   localStorage.getItem("fish_store_cart") &&
  //   JSON.parse(localStorage.getItem("fish_store_cart") ?? "");

  return (
    <section className="col inner-border">
      {/* Shopping Cart */}
      <div className="">
        <h3 className={`${styles.title}`}>SHOPPING CART</h3>

        <ShoppingCartClientContainer />
      </div>
    </section>
  );
};

export default ShoppingCart;
