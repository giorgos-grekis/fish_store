import styles from "./inventory.module.scss";
import type { FishType } from "@/components/fish-store/card/card";

const InventoryCart = ({ fish }: { fish: FishType }) => {
  return (
    <li className={`${styles.container}`}>
      <div className={`${styles.fish}`}>
        <div>{fish.name}</div>
        <div className={`${styles.innerFish}`}>{fish.price}</div>
        <div>{fish.status}</div>
      </div>
      <div className={`${styles.description}`}>{fish.desc}</div>

      <div className={`${styles.image}`}>{fish.image}</div>
    </li>
  );
};

export default InventoryCart;
