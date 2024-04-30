import React from "react";

const PageTestBootstrap = () => {
  return (
    <div className="container my-3">
      <div className="row">
        {/* FISH STORE */}
        <div className="col-12 col-md-4">
          {/* Products List */}
          <div className="border p-3">
            <h1>FISH STORE</h1>
            <h4>OUR PRODUCTS LIST</h4>
            <div className="card my-2">
              <div className="card-body">
                <h5 className="card-title">PACIFIC HALIBUT</h5>
                <p className="card-text">
                  $17.24 - Everyone’s favorite white fish. We will cut it to the
                  size you need and ship it.
                </p>
                <button className="btn btn-primary">ADD TO CART</button>
              </div>
            </div>
            <div className="card my-2">
              <div className="card-body">
                <h5 className="card-title">LOBSTER</h5>
                <p className="card-text">
                  $32.00 - These tender, mouth-watering beauties are a fantastic
                  hit at any dinner party.
                </p>
                <button className="btn btn-primary">ADD TO CART</button>
              </div>
            </div>
            <div className="card my-2">
              <div className="card-body">
                <h5 className="card-title">SEA SCALLOPS</h5>
                <p className="card-text">
                  $16.84 - Big, sweet and tender. True dry-pack scallops from
                  the icy waters of Alaska.
                </p>
                <button className="btn btn-secondary disabled">
                  UNAVAILABLE
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* SHOPPING CART */}
        <div className="col-6 col-md-4">
          {/* Shopping Cart */}
          <div className="border p-3">
            <h4>SHOPPING CART</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Pacific Halibut
                <span>$17.24</span>
              </li>
            </ul>
            <div className="mt-3">
              <h5>Total: $17.24</h5>
            </div>
          </div>
        </div>
        {/* INVENTORY */}
        <div className="col-6 col-md-4">
          {/* Inventory */}
          <div className="border p-3">
            <h4>INVENTORY</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Pacific Halibut
                <span>Available</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Lobster
                <span>Available</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Sea Scallops
                <span>Sold Out</span>
              </li>
            </ul>
            <div className="mt-3">
              <h4>ADD A NEW FISH</h4>
              <form>
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="Price"
                />
                <select className="form-select my-1">
                  <option selected>Fresh</option>
                  <option>Frozen</option>
                </select>
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="Desc"
                />
                <button className="btn btn-primary mt-2">ADD FISH</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTestBootstrap;
