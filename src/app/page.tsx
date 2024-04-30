import Image from "next/image";
import styles from "./page.module.scss";
import FishStore from "@/components/fish-store/fish-store";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container grid-container my-3">
        {/* FISH STORE */}
        <FishStore />
        {/* SHOPPING CART */}
        <div className="">
          {/* Shopping Cart */}
          <div className="">
            <h4>SHOPPING CART</h4>
            <ul className="">
              <li className="">
                Pacific Halibut
                <span>$17.24</span>
              </li>
            </ul>
            <div className="">
              <h5>Total: $17.24</h5>
            </div>
          </div>
        </div>
        {/* INVENTORY */}
        <div className="">
          {/* Inventory */}
          <div className="">
            <h4>INVENTORY</h4>
            <ul className="">
              <li className="">
                Pacific Halibut
                <span>Available</span>
              </li>
              <li className="">
                Lobster
                <span>Available</span>
              </li>
              <li className="">
                Sea Scallops
                <span>Sold Out</span>
              </li>
            </ul>
            <div className="">
              <h4>ADD A NEW FISH</h4>
              <form>
                <input type="text" className="" placeholder="Name" />
                <input type="text" className="" placeholder="Price" />
                <select className="">
                  <option selected>Fresh</option>
                  <option>Frozen</option>
                </select>
                <input type="text" className="" placeholder="Desc" />
                <button className="">ADD FISH</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
