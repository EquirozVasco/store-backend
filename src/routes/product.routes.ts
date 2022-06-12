import { Router } from "express";
import product_controller from "../controllers/product.controllers";
import { checkRole } from "../middlewares/roleAuth";


const router = Router()
const vs = '/api/v1'

router.post(vs + '/products/', checkRole(['admin']), product_controller.createProduct)
router.get(vs + '/products/', checkRole(['admin']), product_controller.getProducts)
router.get(vs + '/products/:id', checkRole(['admin']), product_controller.getProduct)
router.put(vs + '/products/:id', checkRole(['admin']), product_controller.updateProduct)
router.delete(vs + '/products/:id', checkRole(['admin']), product_controller.deleteProduct)

export default router