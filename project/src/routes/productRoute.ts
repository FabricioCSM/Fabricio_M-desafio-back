import { Router } from 'express';
import ProductController from '../controller/productController';
import AuthMiddleware from '../middlewares/authMiddleware';

const router = Router();
const authMiddleware = new AuthMiddleware();
const productController = new ProductController();

router
  .get('/api/v1/product-categories', authMiddleware.verifyToken, productController.getAllCategories)
  .get('/api/v1/product-by-categories-query', authMiddleware.verifyToken, productController.getProductByCategoryOrQuery)
  .get('/api/v1/product-by-id', authMiddleware.verifyToken, productController.getProductById)

export default router;  