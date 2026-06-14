import {useState} from 'react';
import {Alert} from 'react-native';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password');
      return;
    }

    if (
      email === 'admin@gmail.com' &&
      password === '123456'
    ) {
      Alert.alert(
        'Success',
        'Login successful',
      );
      return;
    }

    setError('Invalid email or password');
  };

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleLogin,
  };
};