import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import dbUser from "../../database/models/user";

dotenv.config();

// helper file to prepare responses.
const apiResponse = require("../helpers/apiResponse");

const UserModel = dbUser;

class AuthMiddleware {

  public async verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["x-access-token"] as string;

    if (!token) {
      return apiResponse.unauthorizedResponse(res, "Token não encontrado!");
    }

    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    } catch (error) {
      return apiResponse.unauthorizedResponse(res, "Validação do token incorreta!");
    }

    try {
      const { id } = decoded as string | any ;
      const foundUser = await UserModel.findOne({ where: { id: id }});

      if (foundUser) {
        req.user = {
          id
        };
        next();
      } else { // não encontrou ninguem
        return apiResponse.unauthorizedResponse(res, "Token inválido!");
      }
    } catch (error) {
      return apiResponse.unauthorizedResponse(res, "Validação do token incorreta!");
    }
  }
};

export default AuthMiddleware;
