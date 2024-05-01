"use client";
import { FishType } from "@/components/fish-store/card/card";
import styles from "./button.module.scss";
import { json } from "stream/consumers";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  className?: string;
  fish?: FishType;
}
//  HTMLButtonElement

const Button = ({ fish, content, className, type = "button" }: ButtonType) => {
  console.log("fish button: ", fish);

  const handleOnClick = () => {
    if (type !== "button" && !fish) return;

    const fishStoreCart = localStorage.getItem("fish_store_cart");
    if (!fishStoreCart) {
      localStorage.setItem("fish_store_cart", JSON.stringify([fish]));
      return;
    }

    const fishStoreCartAdd = JSON.parse(
      localStorage.getItem("fish_store_cart") ?? ""
    );
    fishStoreCartAdd.push(fish);

    localStorage.setItem("fish_store_cart", JSON.stringify(fishStoreCartAdd));

    console.log("fishStoreCart test: ", fishStoreCartAdd);
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
