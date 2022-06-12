import { Router } from "express";
import user_controller from "../controllers/user.controllers";
import { checkRole } from "../middlewares/roleAuth";

const router = Router()
const vs = '/api/v1'

router.post(vs + '/users/', checkRole(['admin']), user_controller.createUser)
router.get(vs + '/users/', checkRole(['admin']), user_controller.getUsers)
router.get(vs + '/users/:id', checkRole(['admin']), user_controller.getUser)
router.put(vs + '/users/:id', checkRole(['admin', 'client']), user_controller.updateUser)
router.delete(vs + '/users/:id', checkRole(['admin']), user_controller.deleteUser)

export default router