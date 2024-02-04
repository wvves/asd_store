import { Input } from '@ui/fields';
import React from 'react';
import classes from './login.module.css';
import { Button } from '@ui/buttons';

export const Login: React.FC = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  // console.log(login, password)

  return (
    <form className={classes.login_form}>
      <div style={{ fontSize: 24 }}>Login</div>
      <Input
        type='email'
        label='Email'
        value={login}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setLogin(event.target.value);
        }}
      />
      <Input
        type='password'
        label='Password'
        value={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
      />
      <Button>sign in</Button>
    </form>
  );
};
