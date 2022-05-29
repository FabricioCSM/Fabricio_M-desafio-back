import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import {Op} from 'sequelize'
import UserModel from '../../database/models/user';
import { v4 as uuid } from 'uuid';
import { errorResponse, notFoundResponse, successResponse, successResponseWithData, validationErrorWithData } from '../helpers/apiResponse';
import { hashPassword } from '../helpers/auth';
import IUser from '../interfaces/user.interface';


class UserController {
  public async create(req: Request, res: Response): Promise<Response<IUser>> {
    body("email")
      .isLength({ min: 1 })
      .trim()
      .withMessage("Email deve ser informado.")
      .isEmail()
      .withMessage("O email deve ser um endereço de email válido."),
    body("email").custom((value) =>
      UserModel.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("Email já cadastrado no sistema!");
        }
      })
    ),
    body("username").isLength({ min: 6 }).trim().withMessage("O usuário deve ser informado."),
    body("password")
      .isLength({ min: 6 })
      .trim()
      .withMessage("Senha com mínimo de 6 caracteres deve ser especificada."),
  
    // Sanitize fields.
    body("email").escape(),
    body("username").escape(),
    body("password").escape();
  
    try {
  
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
  
        return validationErrorWithData(res, "Erro de validação.", errors.array());
      } else {
        // cadastra o usuário
        const createdUser = await UserModel.create({
          id: uuid(),
          email: req.body.email,
          password: hashPassword(req.body.password),
          username: req.body.username
        });
  
        return successResponseWithData(
          res,
          "Usuário cadastrado com sucesso",
          createdUser
        );
      }
    } catch (err) {
      // throw error in json response with status 500.
      console.error(err);
      return errorResponse(res, err as string);
    }
  }

  public async findOne(req: Request, res: Response): Promise<Response<IUser>> {
    const { email } = req.body;
    try {
      const user = await UserModel.findOne({ where: { email } }).then((user) => {
        if (user) {
          return user;
        }
      })
      return successResponseWithData(
        res,
        "Usuário encontrado com sucesso",
        user
      );
    } catch (err) {
      console.log(err);
      return errorResponse(res, err as string);
    }
  }

  public async findAll(req: Request, res: Response): Promise<Response<IUser[]>> {
    try {
      const user = await UserModel.findAll().then((users) => {
        if (users) {
          return users;
        }
      })
      return successResponseWithData(
        res,
        "Usuários encontrado com sucesso",
        user
      );
    } catch (err) {
      console.log(err);
      return errorResponse(res, err as string);
    }
  }
}

export default UserController;