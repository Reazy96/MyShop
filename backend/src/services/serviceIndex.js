import { registerUser } from "./userServices/registerUser.js";
import { verifyUserEmail } from "./userServices/verifyEmail.js";
import { loginUser } from "./userServices/loginUser.js";
import { getAllProducts } from "./productServices/getAllProducts.js";

export const UserServices = { registerUser, verifyUserEmail, loginUser };
export const ProductServices = { getAllProducts };
