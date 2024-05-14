import { ProductServices } from "../services/serviceIndex.js";

async function getAllProductsCon(req, res) {
  try {
    const products = await ProductServices.getAllProducts();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get all products" });
  }
}

export const ProductController = {
  getAllProductsCon,
};
