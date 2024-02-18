import React from 'react';

type AuthContextType = {
  auth: boolean | null;
  setAuth: (auth: boolean) => void;
};

export const AuthContext = React.createContext<AuthContextType>({
  auth: null,
  setAuth: () => {}
});
