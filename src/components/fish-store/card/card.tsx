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
  console.log("fish: ", fish);
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
          width={160}
          height={120}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="">
        <div className={`${styles.titleContainer}`}>
          <h5 className={`${styles.title}`}>{fish.name}</h5>
          <div className={`${styles.price}`}>${price}</div>
        </div>
        <p className={`${styles.description}`}>{fish.desc}</p>
        {!isUnavailable && <Button content="ADD TO CART" />}
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
