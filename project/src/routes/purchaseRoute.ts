import { Router } from 'express';
import PurchaseController from '../controller/purchaseController';
import AuthMiddleware from '../middlewares/authMiddleware';

const router = Router();
const purchaseController = new PurchaseController();
const authMiddleware = new AuthMiddleware();

router
  .post('/api/v1/purchase-product', authMiddleware.verifyToken, purchaseController.purchaseProduct);

export default router;