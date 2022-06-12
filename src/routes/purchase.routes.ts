import { Router } from "express";
import purchase_controller from "../controllers/purchase.controllers";
import { checkRole } from "../middlewares/roleAuth";

const router = Router()
const vs = '/api/v1'

router.post(vs + '/purchases/', checkRole(['admin', 'client']), purchase_controller.createPurchase)
router.get(vs + '/purchases/', checkRole(['admin', 'client']), purchase_controller.getPurchases)
router.get(vs + '/purchases/:id', checkRole(['admin', 'client']), purchase_controller.getPurchase)

export default router