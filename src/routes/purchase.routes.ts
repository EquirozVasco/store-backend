import { Router } from "express";
import purchase_controller from "../controllers/purchase.controllers";

const router = Router()
const vs = '/api/v1'

router.post(vs + '/purchases/', purchase_controller.createPurchase)
router.get(vs + '/purchases/', purchase_controller.getPurchases)
router.get(vs + '/purchases/:id', purchase_controller.getPurchase)

export default router