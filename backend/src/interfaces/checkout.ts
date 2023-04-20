import { IUser } from "../model/user";

interface ICheckout {
  items: string[];
  user: IUser;
  address: {
    street: string,
    city: string,
    state: string,
    pincode: string
  }
}

export default ICheckout;
