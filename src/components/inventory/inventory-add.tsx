import { addNewFish } from "@/app/actions";
import Button from "../UI/button/button";
import styles from "./inventory.module.scss";

const InventoryAdd = () => {
  return (
    <div className="">
      <h3 className={`${styles.title}`}>ADD A NEW FISH</h3>
      <form className={`${styles.container}`} action={addNewFish}>
        <div className={`${styles.fish}`}>
          {/* Name */}
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              required
              name="name"
              type="text"
              className=""
              id="name"
              placeholder="Name"
            />
          </div>

          {/* Price */}
          <div className={`${styles.innerFish}`}>
            <label className="sr-only" htmlFor="price">
              Price
            </label>
            <input
              required
              name="price"
              type="number"
              className=""
              id="price"
              placeholder="Price"
            />
          </div>

          {/* Available */}
          <div>
            <label className="sr-only" htmlFor="selectAvailability">
              Price
            </label>
            <select
              name="status"
              required
              id="selectAvailability"
              className={`${styles.select}`}
            >
              <option value={"available"}>Available</option>
              <option value={"unavailable"}>Sold Out!</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className={`${styles.description} `}>
          <label htmlFor="fishDescription"></label>
          <textarea
            name="desc"
            required
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
            required
            type="file"
            accept="image/png, image/jpeg"
            name="image"
            id="fishImage"
          />
        </div>

        <Button type="submit" className={`${styles.btn}`} content="ADD FISH" />
      </form>
    </div>
  );
};

export default InventoryAdd;
