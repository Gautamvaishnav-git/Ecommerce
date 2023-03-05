import express from "express";
import userRouter from "./routes/user";
import storeRouter from "./routes/store";
import cartRouter from "./routes/cart";
import { connectToMongoDB } from "./connection";
import * as dotenv from "dotenv";

dotenv.config();

const ecommerceURL = "mongodb://127.0.0.1:27017/Ecommerce";

connectToMongoDB(ecommerceURL)
  .then(() => console.log("mongodb is running on DB", ecommerceURL))
  .catch((err) => console.log("mongo err", err));

const app = express();
const port = 5000;

app.use(express.json());
app.use("/user", userRouter);
app.use("/store", storeRouter);
app.use("/cart", cartRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
