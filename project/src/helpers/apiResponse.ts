import { Response } from 'express';

export const successResponse = (res: Response, msg: string) => {
  const data = {
    status: 1,
    message: msg
  };
  return res.status(200).json(data);
};

export const successResponseWithData = (res: Response, msg: string, data: any) => {
  const resData = {
    status: 1,
    message: msg,
    data: data
  };
  return res.status(200).json(resData);
};

export const errorResponse = (res: Response, msg: string) => {
  const data = {
    status: 0,
    message: msg
  };
  return res.status(500).json(data);
};

export const notFoundResponse = (res: Response, msg: string) => {
  const data = {
    status: 0,
    message: msg
  };
  return res.status(404).json(data);
};

export const validationErrorWithData = (res: Response, msg: string, data: any) => {
  const resData = {
    status: 0,
    message: msg,
    data: data
  };
  return res.status(400).json(resData);
};

export const unauthorizedResponse = (res: Response, msg: string) => {
  const data = {
    status: 0,
    message: msg
  };
  return res.status(401).json(data);
};
