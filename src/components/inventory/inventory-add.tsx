import Button from "../UI/button/button";
import styles from "./inventory.module.scss";

const InventoryAdd = () => {
  return (
    <div className="">
      <h3 className={`${styles.title}`}>ADD A NEW FISH</h3>
      <form className={`${styles.container}`}>
        <div className={`${styles.fish}`}>
          {/* Name */}
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input type="text" className="" placeholder="Name" />
          </div>

          {/* Price */}
          <div className={`${styles.innerFish}`}>
            <label className="sr-only" htmlFor="name">
              Price
            </label>
            <input type="number" className="" placeholder="Price" />
          </div>

          {/* Available */}
          <div>
            <select className="">
              <option value={"available"}>Available</option>
              <option value={"unavailable"}>Sold Out!</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className={`${styles.description} `}>
          <label htmlFor="fishDescription"></label>
          <textarea
            id="fishDescription"
            className={`${styles.textarea}`}
            placeholder="Desc"
          ></textarea>
        </div>

        <div className={`${styles.description} `}>
          <label className={`${styles.fileUpload}`} htmlFor="fishImage">
            Image
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="image"
            id="fishImage"
          />
        </div>

        <div>
          <Button className={`${styles.btn}`} content="ADD FISH" />
        </div>
      </form>
    </div>
  );
};

export default InventoryAdd;
