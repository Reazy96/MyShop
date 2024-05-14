import { Products } from "../../models/products.js";

export async function getAllProducts() {
  const products = await Products.find({});
  return products;
}
