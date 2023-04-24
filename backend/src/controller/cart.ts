import {Response, Request} from "express";
import cart from "../model/cart";
import StoreModel from "../model/store";

interface user {
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    userID: string;
}

const handleFetchCart = async (req: Request, resp: Response) => {
    const user: user = req.body.user;
    const Items = await cart.find({userID: user.userID});
    return resp.json(Items);
};

const handleAddProduct = async (req: Request, resp: Response) => {
    const user: user = req.body.user;
    const product = await StoreModel.findOne({asin: req.body.asin});
    if (product) {
        const isExists = await cart.findOne({
            userID: user.userID,
            asin: product.asin,
        });
        if (!isExists) {
            const addProduct = await cart.create({
                userID: user.userID,
                price: product.price,
                asin: product.asin,
                title: product.title,
                reviews: product.reviews,
                main_image: product.main_image,
            });
            return resp.json({asin: addProduct.asin, title: addProduct.title});
        } else {
            const updated = await cart.findOneAndUpdate(
                {asin: product.asin, userID: user.userID},
                {$inc: {quantity: 1}}
            );
            return resp.json({asin: updated.asin, title: updated.title});
        }
    } else {
        return resp.status(404).json({product: "product not available"});
    }
};

const handleDelete = async (req: Request, resp: Response) => {
    const user: user = req.body.user;
    const deletedProduct = await cart.deleteOne({
        userID: user.userID,
        asin: req.params.asin,
    });
    return resp.status(200).json(deletedProduct);
};

const handleInc = async (req: Request, resp: Response) => {
    try {
        await cart.findOneAndUpdate(
            {asin: req.body.asin, userID: req.body.user.userID},
            {$inc: {quantity: 1}}
        )
        return resp.json({quantity: "increased"})
    } catch (e) {
        return resp.json({err: e.message})
    }
}


const handleDec = async (req: Request, resp: Response) => {
    try {
        const isExists = await cart.findOne({
            userID: req.body.user.userID,
            asin: req.body.asin
        })
        if (isExists && isExists.quantity > 1) {
            await cart.findOneAndUpdate({
                _id: isExists._id,
                // userID: req.body.user.userID
            }, {$inc: {quantity: -1}})
            return resp.json({quantity: "decreased"});
        } else {
            return resp.status(401).json({message: "min quantity reached"});
        }
    } catch (e) {
        return resp.json({err: e.message})
    }

}

export {handleAddProduct, handleFetchCart, handleDelete, handleInc, handleDec};
