import express from "express";
import productRoutes from './product.routes';
import purchaseRoutes from './purchase.routes';
import userRoutes from './user.routes';
import rolesRoutes from "./role.routes";
import auth_controller from "../controllers/auth.controller"
import verifyRequest from "../middlewares/token.middleware";

const app = express()
const router = express.Router()
const vs = '/api/v1'

router.post(vs+'/login', auth_controller.login)
router.use(verifyRequest.verifyRequest)

router.use(productRoutes)
router.use(purchaseRoutes)
router.use(userRoutes)
router.use(rolesRoutes)

export default router

