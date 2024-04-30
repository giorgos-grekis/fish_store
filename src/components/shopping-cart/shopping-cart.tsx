import styles from "./shopping-cart.module.scss";

const ShoppingCart = () => {
  return (
    <section className="col inner-border">
      {/* Shopping Cart */}
      <div className="">
        <h3 className={`${styles.title}`}>SHOPPING CART</h3>

        <ul className={`${styles.listCartItems}`}>
          <li className="">
            <div>
              <span className={`${styles.qty}`}>13</span>
              <span style={{ margin: "0 0.3rem" }}>x</span>
              <span>Pacific Halibut</span>
            </div>
            <div className={`${styles.price}`}>$17.24</div>
          </li>

          <li className="">
            <div>
              <span className={`${styles.qty}`}>13</span>
              <span style={{ margin: "0 0.3rem" }}>x</span>
              <span>Pacific Halibut</span>
            </div>
            <div className={`${styles.price}`}>$17.24</div>
          </li>

          <li className="">
            <div>
              <span className={`${styles.qty}`}>13</span>
              <span style={{ margin: "0 0.3rem" }}>x</span>
              <span>Pacific Halibut</span>
            </div>
            <div className={`${styles.price}`}>$17.24</div>
          </li>
        </ul>

        <div className={`${styles.totals}`}>
          <h5>Total: $17.24</h5>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
