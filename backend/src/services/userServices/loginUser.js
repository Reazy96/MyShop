import { Users } from "../../models/users.js";
import { createToken } from "../../utils/createToken.js";
import { hash } from "../../utils/createHash.js";
import { userToView } from "./helpers.js";

export async function loginUser({ email, password }) {
  const user = await Users.findOne({ email });
  if (!user) throw new Error("invalid login");

  if (!user.isEmailVerified) throw new Error("Email not verified,login aborted");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) throw new Error("invalid login");

  const accessToken = createToken(user, "access");

  return { user: userToView(user), tokens: { accessToken } };
}
