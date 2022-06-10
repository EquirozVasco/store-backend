import { Request, Response } from "express";
import { Product } from "../entities/Product";

const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, category, price, quantity } = req.body
        if (name === "" || category === "" || price === "" || quantity === "") {
            throw new Error("Please fill all fields");
        } else {
            const product = new Product()
            product.name = name
            product.category = category
            product.price = price
            product.quantity = quantity
            await product.save()
            return res.json({ message: 'Product created successfully.', product })
        }
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        return res.json({ message: 'Products consulted successfully.', products })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let product = await Product.findOneBy({ id: parseInt(id) })
        if (!product) return res.json({ message: "Product does not exist" })
        await Product.update({ id: parseInt(id) }, req.body)
        product = await Product.findOneBy({ id: parseInt(req.params.id) })
        return res.json({ message: 'Product updated successfully.', product })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await Product.delete({ id: parseInt(id) })
        if (result.affected === 0) {
            return res.json({ message: 'Product not found' })
        }
        return res.json({ message: 'Product deleted successfully.' })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let product = await Product.findOneBy({ id: parseInt(id) })
        if (!product) return res.json({ message: "Product does not exist" })
        return res.json({ message: 'Product consulted successfully.', product })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

export default { createProduct, getProducts, updateProduct, deleteProduct, getProduct }