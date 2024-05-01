"use client";
import { useFishesContext } from "@/providers/context-provider";
import { formatedPrice } from "@/utils/helpers";
import styles from "./shopping-cart.module.scss";
import type { CartItemType } from "@/providers/context-provider";

const findTotalPrice = (items: CartItemType[]) => {
  let price = 0;
  for (const fish of items ?? []) {
    price += fish.price * fish.qty;
  }
  return price;
};

const ShoppingCartClientContainer = () => {
  const { cartItems, setCartItems } = useFishesContext();

  // const handleRemoveItem = (id: string | number) => {
  //   console.log("handleRemoveItem: ", id);

  //   setCartItems((prevValues: CartItemType[]) => {
  //     const findItem = prevValues.find((item) => item.id === id)!;
  //     const filterItems = prevValues.filter((item) => item.id !== id);
  //     console.log("remove state 0 : ", { findItem, filterItems });

  //     if (findItem?.qty > 1 && filterItems.length > 0) {
  //       console.log("remove state 1 : ", { findItem, filterItems });
  //       return [...filterItems, { findItem, qty: findItem.qty-- }];
  //     }
  //   });
  // };

  return (
    <>
      {!cartItems && <p className={`${styles.emptyMessage}`}>Cart is empty</p>}

      {cartItems && (
        <>
          <ul className={`${styles.listCartItems}`}>
            {(cartItems ?? []).map((item: CartItemType) => (
              <li
                // onClick={() => handleRemoveItem(item.id)}
                className=""
                key={item.id}
              >
                <div>
                  <span className={`${styles.qty}`}>{item.qty}</span>
                  <span style={{ margin: "0 0.3rem" }}>x</span>
                  <span>{item.name}</span>
                </div>
                <div className={`${styles.price}`}>
                  ${formatedPrice(item.price * item.qty)}
                </div>
              </li>
            ))}
          </ul>

          <div className={`${styles.totals}`}>
            <h4>Total: ${formatedPrice(findTotalPrice(cartItems))}</h4>
          </div>
        </>
      )}
    </>
  );
};

export default ShoppingCartClientContainer;
