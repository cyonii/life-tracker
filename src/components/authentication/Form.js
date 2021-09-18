import React from 'react';
import axios from 'axios';
import { Form as BSForm, Button } from 'react-bootstrap';

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post('http://localhost:3000/api/v1/auth', { email, password })
      .then((res) => {
        localStorage.setItem('authToken', res.data.auth_token);
        localStorage.setItem('user', res.data.user);
      })
      .catch((err) => (err));
  };

  return (
    <BSForm className="px-3 py-5 shadow border border-4 border-primary alert-primary rounded-2" onSubmit={handleSubmit}>
      <BSForm.Group className="mb-3" controlId="formBasicEmail">
        <BSForm.Label className="mb-0">Email address</BSForm.Label>
        <BSForm.Control className="border-primary border-2" name="email" type="email" required placeholder="Enter email address" />
      </BSForm.Group>

      <BSForm.Group className="mb-3" controlId="formBasicPassword">
        <BSForm.Label className="mb-0">Password</BSForm.Label>
        <BSForm.Control className="border-primary border-2" name="password" type="password" required placeholder="Enter password" />
      </BSForm.Group>

      <Button variant="primary" className="fw-bold text-white border border-2 px-5 border-white shadow" type="submit">
        Login
      </Button>
    </BSForm>
  );
}
