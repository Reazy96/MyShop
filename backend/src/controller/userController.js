import { UserServices } from "../services/serviceIndex.js";

async function registerUserCon(req, res) {
  try {
    const userInfo = req.body;
    const result = await UserServices.registerUser(userInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not register" });
  }
}

async function postVerifyUserEmailCon(req, res) {
  try {
    const verifyEmailInfo = {
      userId: req.body.userId,
      sixDigitCode: req.body.sixDigitCode,
    };
    const result = await UserServices.verifyUserEmail(verifyEmailInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not register" });
  }
}

async function postLoginUserCon(req, res) {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };
    const result = await UserServices.loginUser(userInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not register" });
  }
}

export const UserController = {
  registerUserCon,
  postVerifyUserEmailCon,
  postLoginUserCon,
};
