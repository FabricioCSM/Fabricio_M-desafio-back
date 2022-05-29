import fetch from "node-fetch"
// import ProductModel from '../models/productModel';
import IProductCategories from '../interfaces/product.interface';
import IProduct from '../interfaces/productCategories.interface';

export default class ProductService {
  // public productModel = new ProductModel();

  public getAllCategories = async (): Promise<Array<IProductCategories>> => {
    const allProductsCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    return allProductsCategories.json();
  };

  public getProductsByCategoriesOrQuery = async (categoryId: string, query?: string): Promise<Array<IProduct>> => {
    const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    return products.json();
  };

  public getProductById = async (productId: string) => {
    const allProductsCategories = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    return allProductsCategories.json();
  };
}