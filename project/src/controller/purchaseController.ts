import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import PurchaseModel from '../../database/models/purchase';
import { v4 as uuid } from 'uuid';
import { errorResponse, successResponseWithData, validationErrorWithData } from '../helpers/apiResponse';
import jwt from "jsonwebtoken";
import IPurchase from '../interfaces/purchase.interface';
import ProductService from '../service/productService';
import IProduct from '../interfaces/product.interface';
import UserModel from '../../database/models/user';

export default class PurchaseController {
  public service = new ProductService();

  public purchaseProduct = async (req: Request, res: Response): Promise<Response<IPurchase>> => {
    const { productId, quantity } = req.body
    const token = req.headers["x-access-token"] as string;

    const product = await this.service.getProductById(productId);

    const total = product.price * quantity

    const productTitle = product.title

    body("quantity")
    .isEmpty()
    .trim()
    .withMessage("A quantidade para compra deve ser informada.")

    try {

      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
  
        return validationErrorWithData(res, "Erro de validação.", errors.array());
      } else {
        // cadastra o usuário
        const purchasedProduct = await PurchaseModel.create({
          id: uuid(),
          userId: req.user.id,
          productName: productTitle,
          quantity: req.body.quantity,
          total,
        });
  
        return successResponseWithData(
          res,
          "Compra efetuada com sucesso",
          purchasedProduct
        );
      }
    } catch (err) {
      // throw error in json response with status 500.
      console.error(err);
      return errorResponse(res, err as string);
    }
  };
}