import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import { Box, TextField, Button } from '@mui/material';
import { PhonebookContainer } from '../components/App/App.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  return (
    <PhonebookContainer>
      <h1>Register</h1>
      <Box
        component="form"
        sx={{
          width: '340px',
          marginRight: 'auto',
          marginLeft: 'auto',
          textAlign: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          variant="standard"
          size="small"
          sx={{
            marginTop: '10px',
            width: '100%',
          }}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          required
        />

        <TextField
          label="Email"
          variant="standard"
          size="small"
          sx={{
            marginTop: '10px',
            width: '100%',
          }}
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          required
        />

        <TextField
          label="Password"
          variant="standard"
          size="small"
          sx={{
            marginTop: '10px',
            width: '100%',
          }}
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          required
        />

        <Button
          variant="contained"
          size="small"
          sx={{
            marginTop: '10px',
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </PhonebookContainer>
  );
}
