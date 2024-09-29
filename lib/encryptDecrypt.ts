import { genSaltSync, hashSync, compareSync } from "bcryptjs";

export function encryption(password: string) {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
}

export function compareEncryption(password: string, hash: string) {
  return compareSync(password, hash);
}
