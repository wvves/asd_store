import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../instance";

export const registerUserWithEmailAndPassword = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)

  return { ... response }
}
