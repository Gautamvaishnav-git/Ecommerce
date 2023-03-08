import { model } from "mongoose";
import { detailSchema, productSchema } from "../schemas/detail";

const StoreModel = model("Store", productSchema);

export const DetailModel = model("productDetail", detailSchema);

export default StoreModel;
