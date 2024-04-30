const Inventory = () => {
  return (
    <div className={`col out-border`}>
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
  );
};

export default Inventory;
