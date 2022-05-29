import { Router } from 'express';
import AuthController from '../controller/AuthController';

const router = Router();
const authController = new AuthController();

router
  .post('/api/v1/login', authController.login);

export default router;