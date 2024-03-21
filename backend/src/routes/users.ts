import { Router } from 'express';
import usersController from '../controllers/usersController';
const router = Router();

router.post('/authenticate', usersController.authenticateUser);

export default router;
