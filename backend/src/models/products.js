import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    productImg: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    variations: [
      {
        color: { type: String, required: true },
        size: { type: String, required: true },
      },
    ],
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { collection: "products" }
);

export const Products = mongoose.model("Products", productsSchema);
