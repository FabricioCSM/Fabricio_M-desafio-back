interface IPurchase {
  id: string,
  userId: string,
  productName: string,
  quantity: number,
  total: number,
  createdAt?: Date,
  updatedAt?: Date,
  dataValues?: {
    id: number,
    userId: string,
    productName: string,
    quantity: number,
    total: number,
    createdAt?: Date,
    updatedAt?: Date,
  }
}

export default IPurchase;