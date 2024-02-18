import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../instance";
import React from "react";
import { usePromise } from "@utils/hooks";


export const useAuthState = () => {
  const { isLoading, setIsLoading, isError, setError, error, setData, data } = usePromise<string | null>();

  React.useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if(!user) return setIsLoading(false)
      try {
        setData(user.email)
        setIsLoading(true)
      } catch(error: any) {
        setError(error.message)
      }
      finally {
        setIsLoading(false)
      }
    })
    return () => {
      listener()
    }
  }, [auth])

  return {data, isLoading, isError, error}
}