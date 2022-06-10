import { Request, Response } from "express";
import { Purchase } from "../entities/Purchase";
import { Product } from "../entities/Product";
import { User } from "../entities/User";

const getTotalProducts = async (array: any) => {
    let totalProducts = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index]["id"];
        let product = await Product.findOneBy({ id: element })
        if (product) {
            totalProducts = totalProducts + product.price
        }
    }
    return totalProducts
}

const createPurchase = async (req: Request, res: Response) => {
    try {
        const { name, user, products } = req.body
        if (name === "" || user === "" || products === "") {
            throw new Error("Please fill all fields");
        } else {
            let totalProducts = await getTotalProducts(products)
            let userId = user.id
            let userUpdate = await User.findOneBy({ id: userId })
            if (!userUpdate) return res.json({ message: "User does not exist" })
            let money = userUpdate.money
            if (money >= totalProducts) {
                let moneyUpdate = money - totalProducts
                await User.update({ id: userId }, { money: moneyUpdate })
                const purchase = new Purchase()
                purchase.name = name
                purchase.total = totalProducts
                purchase.user = user
                purchase.products = products
                await purchase.save()
                return res.json({ message: 'Purchase created successfully.', purchase })
            } else {
                return res.json({ message: "insufficient money" })
            }
        }
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const getPurchases = async (req: Request, res: Response) => {
    try {
        const purchase = await Purchase.find({
            relations: {
                user: true,
                products: true,
            },
            select: {
                id: true,
                name: true,
                total: true,
                purchaseDate: true,
                updatedAd: true,
                products: true,
                user: {
                    id: true,
                    name: true,
                    money: true,
                    userName: true
                }
            }
        })
        return res.json({ message: 'Purchases consulted successfully.', purchase })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const getPurchase = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let purchase = await Purchase.findOneBy({ id: parseInt(id) })
        if (!purchase) return res.json({ message: "Purchase does not exist" })
        const data = {
            id: purchase.id,
            name: purchase.name,
            total: purchase.total,
            purchaseDate: purchase.purchaseDate
        }
        return res.json({ message: 'Purchase consulted successfully.', data })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

export default { createPurchase, getPurchase, getPurchases }