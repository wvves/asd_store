import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../instance";

export const loginWithEmailAndPassword = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)