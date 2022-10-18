import { Router } from "express";
import { getUsers, getUser, putUser, postUser, deleteUser } from '../controllers/users';

const router = Router()

router.get( '/', getUsers );

router.get( '/:id', getUser );

router.put( '/:id', putUser );

router.post( '/', postUser );

router.delete( '/:id', deleteUser );

export default router;