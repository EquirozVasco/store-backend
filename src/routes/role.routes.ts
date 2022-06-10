import { Router } from "express";
import role_controller from "../controllers/role.controller";

const router = Router()
const vs = '/api/v1'

router.post(vs + '/roles/', role_controller.createRole)
router.get(vs + '/roles/', role_controller.getRoles)

export default router