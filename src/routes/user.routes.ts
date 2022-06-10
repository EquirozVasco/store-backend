import { Router } from "express";
import user_controller from "../controllers/user.controllers";

const router = Router()
const vs = '/api/v1'

router.post(vs + '/users/', user_controller.createUser)
router.get(vs + '/users/', user_controller.getUsers)
router.get(vs + '/users/:id', user_controller.getUser)
router.put(vs + '/users/:id', user_controller.updateUser)
router.delete(vs + '/users/:id', user_controller.deleteUser)

export default router