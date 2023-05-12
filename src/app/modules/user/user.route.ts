import { Router } from "express";
import { createUser, getAdminUsers, getUserById, getUsers } from "./user.controller";

const router = Router();

router.get( '/', getUsers );
router.get( '/user/:id', getUserById );
router.get( '/admins', getAdminUsers );
router.post( '/create_user', createUser );

export default router;