import mongoose, { Schema, Model, model } from "mongoose";
import { createHmac, randomBytes } from "crypto";

export interface IUser {
  name: string;
  email: string;
  password: string;
  salt: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  _id?: mongoose.Types.ObjectId;
}

interface IUserModel extends Model<IUser> {
  matchPassword: (email: string, password: string) => IUser;
}

const userSchema = new Schema<IUser, IUserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const userPassword = this.password;
  if (!this.isModified("password")) return;
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(userPassword)
    .digest("hex");
  this.salt = salt;
  this.password = hashedPassword;
  next();
});

userSchema.static(
  "matchPassword",
  async function matchPassword(email, password): Promise<IUser | boolean> {
    const user = await this.findOne({ email });
    if (!user) return false;
    const salt = user.salt;
    const hashedPassword = user.password;
    const UserProvidedHashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    if (hashedPassword === UserProvidedHashPassword) return user;
  }
);

const user = model<IUser, IUserModel>("user", userSchema);

export default user;
