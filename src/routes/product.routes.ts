import { Router } from "express";
import product_controller from "../controllers/product.controllers";

const router = Router()
const vs = '/api/v1'

router.post(vs + '/products/', product_controller.createProduct)
router.get(vs + '/products/', product_controller.getProducts)
router.get(vs + '/products/:id', product_controller.getProduct)
router.put(vs + '/products/:id', product_controller.updateProduct)
router.delete(vs + '/products/:id', product_controller.deleteProduct)

export default router