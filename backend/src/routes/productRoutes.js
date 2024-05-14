import express from "express";

import { ProductController } from "../controller/productController.js";

export const productRouter = express.Router().get("/", ProductController.getAllProductsCon);
