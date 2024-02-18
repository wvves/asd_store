import { useAuth, useTheme } from '@utils/hooks';
import classes from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useAuthState } from '@utils/firebase';

type NavBarProps = {
  openModal: () => void;
};

export const NavBar: React.FC<NavBarProps> = ({ openModal }) => {
  const { theme, setTheme } = useTheme();
  const { auth } = useAuth();
  const { data } = useAuthState()
  const navigate = useNavigate();
  console.log(auth, data)
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.lunar_img}>
          <img className={classes.lunar_blessing} />
          <div className={classes.asd_store}>
            <div style={{ zIndex: 2 }}>asd-store</div>
          </div>
        </div>
        <div className={classes.right_el}>
          <div>
            <input
              type='checkbox'
              id='darkmode'
              onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              checked={theme === 'dark'}
            />
            <label htmlFor='darkmode'>dark mode</label>
          </div>
          <div>cart</div>
          {auth ? (
            <div onClick={() => navigate('/profile')}>profile</div>
          ) : (
            <div onClick={openModal}>sign in</div>
          )}
        </div>
      </div>
    </>
  );
};
