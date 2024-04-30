import { fishes } from "@/utils/mockup-data";
import InventoryCart from "./inventory-cart";
import styles from "./inventory.module.scss";
import InventoryAdd from "./inventory-add";

const Inventory = () => {
  return (
    <section className={`col out-border`}>
      <h3 className={`${styles.title}`}>INVENTORY</h3>
      <ul className="">
        {fishes.map((fish) => (
          <InventoryCart key={fish.id} fish={fish} />
        ))}
      </ul>

      <InventoryAdd />
    </section>
  );
};

export default Inventory;
