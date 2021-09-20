import { useState } from 'react';
import { Form as BSForm, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { authenticateUser } from '../../backend';

const Form = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setIsDisabled(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    toast.promise(authenticateUser({ email, password }), {
      pending: { render: () => 'Authenticating...' },
      success: {
        render: ({ data }) => {
          localStorage.setItem('authToken', data.auth_token);
          setTimeout(() => window.location.reload(), 1500);
          return 'Authenticated!';
        },
      },
      error: {
        autoClose: false,
        render: () => {
          setIsDisabled(false);
          return 'Authentication failed!';
        },
      },
    });
  };

  return (
    <BSForm className="px-3 py-5 shadow border border-4 border-primary alert-primary rounded-2" onSubmit={handleSubmit}>
      <hr className="bg-transparent" />
      <BSForm.Group className="mb-3" controlId="formBasicEmail">
        <BSForm.Label className="mb-0">Email address</BSForm.Label>
        <BSForm.Control
          className="border-primary border-2"
          name="email"
          type="email"
          required
          placeholder="Enter email address"
          disabled={isDisabled}
        />
      </BSForm.Group>

      <BSForm.Group className="mb-3" controlId="formBasicPassword">
        <BSForm.Label className="mb-0">Password</BSForm.Label>
        <BSForm.Control
          className="border-primary border-2"
          name="password"
          type="password"
          required
          placeholder="Enter password"
          disabled={isDisabled}
        />
      </BSForm.Group>

      <Button
        variant="primary"
        className="fw-bold text-white border border-2 px-5 border-white shadow"
        type="submit"
        disabled={isDisabled}
      >
        Login
      </Button>
      <hr className="bg-transparent" />
    </BSForm>
  );
};

export default Form;
