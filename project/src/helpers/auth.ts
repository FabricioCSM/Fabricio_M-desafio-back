import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};


export const comparePassword = (password: string, hashPassword: string) => {
  return bcrypt.compareSync(password, hashPassword);
};


export const generateToken = (id: string, email: string, username: string) => {
  const token = jwt.sign(
    {
      id,
      email,
      username
    },
    process.env.JWT_SECRET as string,
    {}
  );
  return token;
};
