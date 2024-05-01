"use server";
import Image from "next/image";
import styles from "./card.module.scss";
import { formatedPrice } from "@/utils/helpers";
import Button from "@/components/UI/button/button";

export type FishType = {
  name: string;
  image: string;
  desc: string;
  price: number;
  status: "available" | "unavailable";
  id: number;
};

const Card = ({ fish }: { fish: FishType }) => {
  const price = formatedPrice(fish.price);

  const isUnavailable = fish.status === "unavailable";

  return (
    <div
      className={`${styles.cardContainer} ${
        isUnavailable ? styles.isUnavailable : ""
      }`}
    >
      <div>
        <Image
          src={fish.image}
          alt={fish.name}
          width={140}
          height={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="">
        <div className={`${styles.titleContainer}`}>
          <h3 className={`${styles.title}`}>{fish.name}</h3>
          <div className={`${styles.price}`}>${price}</div>
        </div>
        <p className={`${styles.description}`}>{fish.desc}</p>
        {!isUnavailable && <Button fish={fish} content="ADD TO CART" />}
        {isUnavailable && (
          <>
            <div className={`${styles.unavailable}`}>
              {fish.status.toUpperCase()}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
