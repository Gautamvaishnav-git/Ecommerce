import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import express from "express";
import userRouter from "./routes/user";
import storeRouter from "./routes/store";
import cartRouter from "./routes/cart";
import searchRouter from "./routes/search";
import { connectToMongoDB } from "./connection";
import { authentication } from "./middleware/authentication";

const ecommerceURL = "mongodb://127.0.0.1:27017/Ecommerce";

connectToMongoDB(ecommerceURL)
  .then(() => console.log("mongodb is running on DB", ecommerceURL))
  .catch((err) => console.log("mongo err", err));

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/store", storeRouter);
app.use("/cart", authentication, cartRouter);
app.use("/search", authentication, searchRouter);

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
