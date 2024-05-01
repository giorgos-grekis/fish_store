"use client";
import { useEffect } from "react";
import styles from "./shopping-cart.module.scss";
import { formatedPrice } from "@/utils/helpers";
import type { FishType } from "../fish-store/card/card";

const findTotalPrice = (items: FishType[]) => {
  let price = 0;
  for (const fish of items) {
    price += fish.price;
  }
  return price;
};

const ShoppingCart = () => {
  const items = JSON.parse(localStorage.getItem("fish_store_cart") ?? "");

  console.log("ShoppingCart items: ", items);

  return (
    <section className="col inner-border">
      {/* Shopping Cart */}
      <div className="">
        <h3 className={`${styles.title}`}>SHOPPING CART</h3>

        <ul className={`${styles.listCartItems}`}>
          {(items ?? []).map((item: FishType) => (
            <li className="" key={item.id}>
              <div>
                <span className={`${styles.qty}`}>13</span>
                <span style={{ margin: "0 0.3rem" }}>x</span>
                <span>{item.name}</span>
              </div>
              <div className={`${styles.price}`}>
                ${formatedPrice(item.price)}
              </div>
            </li>
          ))}
        </ul>

        <div className={`${styles.totals}`}>
          <h4>Total: ${formatedPrice(findTotalPrice(items))}</h4>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
