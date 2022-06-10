import { Router } from "express";
import purchase_controller from "../controllers/user.controllers";

const router = Router()
const vs = '/api/v1'

router.post(vs + '/users/', purchase_controller.createUser)
router.get(vs + '/users/', purchase_controller.getUsers)
router.get(vs + '/users/:id', purchase_controller.getUser)
router.put(vs + '/users/:id', purchase_controller.updateUser)
router.delete(vs + '/users/:id', purchase_controller.deleteUser)

export default router