import {model, Schema} from "mongoose"
import ICheckout from "../interfaces/checkout";

const checkoutSchema = new Schema<ICheckout>({
    user: {
        name: String,
        email: {type: String, required: true},
        userID: {type: String, required: true}
    }, items: {type: [String], required: true, default: undefined},
    address: {
        type: {
            street: String,
            city: {type: String, required: true},
            state: {type: String, required: true},
            pincode: {type: String, required: true}
        }, required: true, default: undefined
    }
})

const checkoutModel = model("checkout", checkoutSchema);

export default checkoutModel