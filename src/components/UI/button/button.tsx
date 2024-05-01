"use client";
import styles from "./button.module.scss";
import { useFishesContext } from "@/providers/context-provider";

import type { CartItemType } from "@/providers/context-provider";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  className?: string;
  fish?: CartItemType;
}

const Button = ({ fish, content, className, type = "button" }: ButtonType) => {
  const { cartItems, setCartItems } = useFishesContext();

  const handleOnClick = () => {
    if (type !== "button" && !fish) return;

    setCartItems((prevValues: CartItemType[]) => {
      const findItem = prevValues?.find((item) => item.id === fish?.id);
      const filterItems = prevValues?.filter((item) => item.id !== fish?.id);

      if (findItem && filterItems.length > 0) {
        console.log("state 1 : ", { filterItems, findItem, cartItems });
        return [...filterItems, { ...findItem, qty: findItem.qty++ }];
      } else if (findItem && filterItems.length === 0) {
        console.log("state 2 : ", { filterItems, findItem, cartItems });

        return [{ ...findItem, qty: findItem.qty++ }];
      } else if (!findItem && filterItems?.length > 0) {
        console.log("state 3 : ", { filterItems, findItem, cartItems });
        return [...filterItems, fish];
      } else {
        return [fish];
      }
    });
  };

  return (
    <button
      onClick={handleOnClick}
      className={`${styles.btn} ${className}`}
      type={type}
    >
      <>{content}</>
    </button>
  );
};

export default Button;
