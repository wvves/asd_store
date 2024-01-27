import { ThemeContext } from '@utils/context';
import React from 'react';

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
