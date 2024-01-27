import React from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isAuth, setCurrentAuth] = React.useState<boolean | null>(
    localStorage.getItem('auth') === 'true'
  );
  console.log(isAuth)
  const setAuth = (currentAuth: boolean) => {
    localStorage.setItem('auth', JSON.stringify(currentAuth));
    setCurrentAuth(currentAuth);
    console.log('@@')
  };
  const authValue = React.useMemo(
    () => ({ auth: isAuth, setAuth }),
    [isAuth]
  );

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}