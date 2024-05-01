"use client";

import { useForm } from "react-hook-form";
// import { addNewFish } from "@/app/actions";
import Button from "../UI/button/button";
import styles from "./inventory.module.scss";
import type { SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type FishType = {
  name: string;
  image: Array<File> | string;
  desc: string;
  price: number;
  status: "available" | "unavailable";
  id: string;
};

const InventoryAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FishType>();

  const onSubmit: SubmitHandler<FishType> = async (data) => {
    const formData = new FormData();
    const uuid = uuidv4();
    data["id"] = uuid;

    for (const [key, value] of Object.entries(data)) {
      if (
        key === "image" &&
        typeof value !== "string" &&
        typeof value !== "number"
      ) {
        const name = value?.[0];
        formData.set(key, name);
        break;
      }
    }

    try {
      const res = await fetch(`/api/upload?id=${uuid}&title=${data?.name}`, {
        method: "POST",
        body: formData,
      });
      // handle the error
      if (!res.ok) throw new Error(await res.text());

      const resJson = await res.json();

      const [_, imagePath] = resJson.imagePath.split("/public/");

      data["image"] = `/${imagePath}`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3 className={`${styles.title}`}>ADD A NEW FISH</h3>
      {/* action={addNewFish} */}

      <form className={`${styles.container}`} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.fish}`}>
          {/* Name */}
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              required
              // name="name"
              type="text"
              className=""
              id="name"
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </div>

          {/* Price */}
          <div className={`${styles.innerFish}`}>
            <label className="sr-only" htmlFor="price">
              Price
            </label>
            <input
              required
              // name="price"
              type="number"
              className=""
              id="price"
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>

          {/* Available */}
          <div>
            <label className="sr-only" htmlFor="selectAvailability">
              Price
            </label>
            <select
              // name="status"
              required
              id="selectAvailability"
              className={`${styles.select}`}
              defaultValue={"available"}
              {...register("status", { required: true })}
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
            // name="desc"
            required
            id="fishDescription"
            className={`${styles.textarea}`}
            placeholder="Desc"
            {...register("desc", { required: true })}
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
            // name="image"
            id="fishImage"
            {...register("image", { required: true })}
          />
        </div>

        <Button type="submit" className={`${styles.btn}`} content="ADD FISH" />
      </form>
    </>
  );
};

export default InventoryAdd;
