import { Request, Response, NextFunction } from 'express';
import { successResponse, successResponseWithData } from '../helpers/apiResponse';

import ProductService from '../service/productService';

export default class ProductController {
  public service = new ProductService();

  public getAllCategories = async (req: Request, res: Response) => {
    const productCategories = await this.service.getAllCategories();
    
    return successResponseWithData(res, '', productCategories)
  };

  public getProductByCategoryOrQuery = async (req: Request, res: Response) => {
    const { categoryId, query } = req.body;
    const products = await this.service.getProductsByCategoriesOrQuery(categoryId, query);
    
    return successResponseWithData(res, '', products)
  };

  public getProductById = async (req: Request, res: Response) => {
    const { productId } = req.body;
    const product = await this.service.getProductById(productId);
    
    return successResponseWithData(res, '', product)
  };

}