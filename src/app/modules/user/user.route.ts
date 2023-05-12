import { Router } from "express";
import { createUser, getUserById, getUsers } from "./user.controller";

const router = Router();

router.get( '/', getUsers );
router.get( '/:id', getUserById );
router.post( '/create_user', createUser );

export default router;