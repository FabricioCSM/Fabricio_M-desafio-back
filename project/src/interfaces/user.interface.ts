interface IUser {
  id: string,
  username: string,
  email: string,
  password: string,
  createdAt?: Date,
  updatedAt?: Date,
  dataValues?: {
    id: string,
    username: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
  }
}

export default IUser;