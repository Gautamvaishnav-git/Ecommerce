import {Request, Response} from "express";
import checkout from "../model/checkout";
import cart from "../model/cart";


const handleCheckout = async (req: Request, resp: Response) => {
    try {
        await checkout.create({user: req.body.user, items: req.body.items, address: req.body.address})
        await cart.deleteMany({userID: req.body.user.userID})
        return resp.status(202).json({message: "placed"});

    } catch (e) {
        return resp.status(404).json({message: e.message})
    }
}

export {handleCheckout}