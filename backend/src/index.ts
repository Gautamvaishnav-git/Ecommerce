import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import cors from "cors";

import express from "express";
import userRouter from "./routes/user";
import storeRouter from "./routes/store";
import cartRouter from "./routes/cart";
import searchRouter from "./routes/filter";
import { connectToMongoDB } from "./connection";
import { authentication } from "./middleware/authentication";

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/store", storeRouter);
app.use("/cart", authentication, cartRouter);
app.use("/filter", authentication, searchRouter);

app.listen(port, () => {
  try {
    console.log(`Express is listening at http://localhost:${port}`);
    connectToMongoDB()
      .then(() => console.log("mongodb is running"))
      .catch((err) => console.error("mongo err", err.message));
  } catch (error) {
    console.error(error.message);
  }
});
