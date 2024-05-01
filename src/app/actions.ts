"use server";
import path from "path";
import { v4 as uuidv4 } from "uuid";
export const addNewFish = (data: FormData) => {
  const formData = new FormData();
  // const pathname = path.join(process.cwd(), "/public/images");

  let imageName: FormDataEntryValue = "";

  for (const [key, value] of data.entries() ?? []) {
    if (key === "name") {
      imageName = value;
      break;
    }
  }

  for (const [key, value] of data.entries() ?? []) {
    if (key === "image") {
      const pathname = path.join(process.cwd(), "/public/images");
      const uuid = uuidv4();
      const fileExtinction = value?.name.split(".")[1];
      const name = `${pathname}/${uuid}/${imageName}.${fileExtinction}`;
      formData.append(key, name);
      continue;
    }
    formData.append(key, value);
  }

  console.log("formData: ", data.entries, { data, formData });
};
