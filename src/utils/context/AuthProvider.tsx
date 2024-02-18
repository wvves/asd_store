import { useAuthState } from '@utils/firebase';
import React from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const { data } = useAuthState()
  const [auth, setIsAuth] = React.useState<boolean | null>(
    localStorage.getItem('auth') === 'true'
  );

  const setAuth = (auth: boolean) => {
    localStorage.setItem('auth', JSON.stringify(auth));
    setIsAuth(auth);
  }
  React.useEffect(() => {
    if(data) return setAuth(true)
  }, [data])

  const authValue = React.useMemo(() => ({ auth: auth, setAuth: setAuth }), [auth]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
