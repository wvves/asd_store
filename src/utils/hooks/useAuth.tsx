import { AuthContext } from '@utils/context';
import React from 'react';

export const useAuth = () => React.useContext(AuthContext);
