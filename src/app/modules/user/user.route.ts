import { Router } from "express";
import { createUser, getUsers } from "./user.controller";

const router = Router();

router.get( '/', getUsers );
router.post( '/create_user', createUser );

export default router;