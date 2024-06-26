import { Users } from "../../models/users.js";
import { generateRandomSalt, hash } from "../../utils/createHash.js";

import { sendEmail } from "../../utils/sendEmail.js";
import { generateRandomSixDigitCode } from "../../utils/sixDigitCode.js";
import { userToView } from "./helpers.js";

export async function registerUser({ firstname, lastname, email, password }) {
  const foundUserWithMail = await Users.findOne({ email });
  if (foundUserWithMail) throw new Error("User with this email already exists");

  const passwordSalt = generateRandomSalt();
  const passwordHash = hash(`${password}${passwordSalt}`);
  const sixDigitCode = generateRandomSixDigitCode();

  const user = await Users.create({
    firstname,
    lastname,
    email,
    passwordHash,
    passwordSalt,
    isEmailVerified: false,
    sixDigitCode,
  });

  const successMail = await sendEmailVerification(user);

  if (!successMail) {
    await Users.findByIdAndDelete(user._id);
    throw new Error("Could not send email");
  }

  return userToView(user);
}

async function sendEmailVerification(user) {
  const result = await sendEmail({
    to: user.email,
    subject: "Welcome to Todo.io",
    text: `Hi ${user.firstname},welcome to MyShop ! 🤝  Please enter below the six digit verification code to verify your account.
       ${user.sixDigitCode} See you on the other side :) - Reazy from Todo.io`,
  });
  console.log(result);
  return result;
}
