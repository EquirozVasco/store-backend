import { Router } from "express";
import role_controller from "../controllers/role.controller";
import { checkRole } from "../middlewares/roleAuth";

const router = Router()
const vs = '/api/v1'

router.post(vs + '/roles/', checkRole(['admin']),role_controller.createRole)
router.get(vs + '/roles/', checkRole(['admin']),role_controller.getRoles)

export default router