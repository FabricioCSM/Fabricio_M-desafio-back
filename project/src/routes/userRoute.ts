import { Router } from 'express';
import UserController from '../controller/userController';
import AuthMiddleware from '../middlewares/authMiddleware';

const router = Router();
const userController = new UserController();
const authMiddleware = new AuthMiddleware();

router
  .get('/api/v1/user', authMiddleware.verifyToken, userController.findOne)
  .get('/api/v1/all-users', authMiddleware.verifyToken, userController.findAll)
  .post('/api/v1/users', userController.create);
  

export default router;  