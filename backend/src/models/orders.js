import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now, immutable: true },
    products: [
      {
        productId: { type: mongoose.Types.ObjectId, ref: "Products", required: true },
        title: { type: String, required: true },
        productImg: { type: String, required: true },
      },
    ],
    state: { type: String, enum: ["wird bearbeitet..", "versendet :)"], default: "wird bearbeitet.." },
    price: { type: Number, required: true },
    customer: { type: mongoose.Types.ObjectId, ref: "Users", required: true },
  },

  { collection: "orders" }
);

export const Orders = mongoose.model("Orders", ordersSchema);
