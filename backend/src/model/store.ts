import { model } from "mongoose";
import detailSchema from "../schemas/detail";
import productSchema from "../schemas/store";
import { IProduct , Detail} from "../interfaces/detail";

const StoreModel = model<IProduct>("Store", productSchema);

export const DetailModel = model<Detail>("productDetail", detailSchema);

export default StoreModel;
