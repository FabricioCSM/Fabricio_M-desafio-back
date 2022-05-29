import { body, validationResult } from "express-validator";
import { Request, Response } from "express";

import { comparePassword, generateToken } from "../helpers/auth";
import UserModel from '../../database/models/user';
import UserData from '../interfaces/purchase.interface';
// helper file to prepare responses.
import { errorResponse, notFoundResponse, successResponseWithData, unauthorizedResponse, validationErrorWithData } from "../helpers/apiResponse";


class AuthController {
  public async login(req: Request, res: Response): Promise<Response<UserData> | any> {
  // Validate fields.
  body("email")
  .isLength({ min: 1 })
  .trim()
  .withMessage("Email deve ser informado.")
  .isEmail()
  .withMessage("O email deve ser um endereço de email válido."),
  body("password").isLength({ min: 1 }).trim().withMessage("A senha deve ser especificada."),

  // Sanitize fields.
  body("email").escape(),
  body("password").escape()

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return validationErrorWithData(res, "Erro de validação.", errors.array());
    }

    // encontra um usuário com os dados
    const userData = await UserModel.findOne({
      where: { email: req.body.email }
    });

    // valida se existe os dados do usuário
    if (!userData) {
      return notFoundResponse(res, "Dados de acesso incorretos!");
    }


    // valida se a senha está correta
    if (!comparePassword(req.body.password, userData.dataValues.password)) {
      return unauthorizedResponse(res, "Senha incorreta!");
    }

    // gera o token com o email e o username
    const token = generateToken(
      userData.dataValues.id,
      userData.dataValues.email,
      userData.dataValues.username
    );

    return successResponseWithData(res, "Logado com sucesso",  { authToken: token });
    
  } catch (err) {
    console.error(err);
    return errorResponse(res, err as string);
    }
  }
}

export default AuthController;