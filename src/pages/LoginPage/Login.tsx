import { Input } from '@ui/fields';
import React from 'react';
import classes from './login.module.css';
import { Button } from '@ui/buttons';
import { loginWithEmailAndPassword } from '@utils/firebase';

export const Login: React.FC = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await loginWithEmailAndPassword(login, password)
      console.log(response)
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <form className={classes.login_form} onSubmit={handleSubmit}>
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
      <Button type='submit'>sign in</Button>

    </form>
  );
};
