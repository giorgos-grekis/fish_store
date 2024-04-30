import React from "react";

const ShoppingCart = () => {
  return (
    <div className="col inner-border">
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
  );
};

export default ShoppingCart;
