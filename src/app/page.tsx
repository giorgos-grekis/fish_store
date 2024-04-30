import FishStore from "@/components/fish-store/fish-store";
import ShoppingCart from "@/components/shopping-cart/shopping-cart";
import Inventory from "@/components/inventory/inventory";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container grid-container my-3">
        {/* FISH STORE */}
        <FishStore />
        {/* SHOPPING CART */}
        <ShoppingCart />
        {/* INVENTORY */}
        <Inventory />
      </div>
    </main>
  );
}
