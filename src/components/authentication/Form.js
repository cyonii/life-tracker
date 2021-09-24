import { useState } from 'react';
import { Form as BSForm, Button, FloatingLabel } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { registerUser, authenticateUser } from '../../backend';

const Form = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formType, setFormType] = useState('login');
  const [title, setTitle] = useState('Login');
  const [tip, setTip] = useState('New user?');

  const toggleFormType = () => {
    setIsDisabled(false);
    setFormType(formType === 'login' ? 'register' : 'login');
    setTitle(formType === 'login' ? 'Register now' : 'Login');
    setTip(formType === 'login' ? 'Already have an account?' : 'New user?');
  };

  const successCallback = (data) => {
    if (formType === 'login') {
      localStorage.setItem('authToken', data.auth_token);
      setTimeout(() => window.location.reload(), 1500);
    } else {
      toggleFormType();
    }
    return formType === 'login' ? 'Logged in!' : 'Registered! Login to continue.';
  };

  const errorCallback = (error) => {
    const { status, data } = error.response;
    const errorTag = (text) => <p className="mb-0 lh-1 fw-light">{text}</p>;

    switch (status) {
      case 500: return 'Server error';
      case 401: return 'Invalid username or password';
      case 422: return errorTag(`${Object.keys(data)[0]} ${data[Object.keys(data)[0]][0]}`);
      default: return errorTag('Something went wrong');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setIsDisabled(true);

    const { email, password } = e.target;
    const user = { email: email.value, password: password.value };
    const callback = formType === 'login' ? authenticateUser : registerUser;

    await toast.promise((callback.bind(null, user)), {
      pending: { render: () => (formType === 'login' ? 'Logging in...' : 'Registering...') },
      success: { render: ({ data }) => successCallback(data) },
      error: { render: ({ data }) => errorCallback(data) },
    }, { autoClose: false }).catch((err) => err);

    setIsDisabled(false);
  };

  return (
    <BSForm className="px-3 py-5 shadow border border-4 border-primary alert-primary rounded-2" onSubmit={handleSubmit}>
      <h1 className="h4 fw-bold text-center mb-4">{title}</h1>

      <FloatingLabel controlId="email" label="Email" className="text-muted mb-3">
        <BSForm.Control name="name" type="email" placeholder="Email" required disabled={isDisabled} />
      </FloatingLabel>

      <FloatingLabel controlId="password" label="Password" className="text-muted mb-3">
        <BSForm.Control name="name" type="password" placeholder="Passowrd" required disabled={isDisabled} minLength="6" />
        <BSForm.Text muted>Must be 6 or greater</BSForm.Text>
      </FloatingLabel>

      <Button variant="primary" className="text-white border-2 px-5 border-white" type="submit" disabled={isDisabled}>
        {formType === 'login' ? 'Login' : 'Register'}
      </Button>

      <div className="mt-3">
        <p className="fw-light mb-0 text-muted lh-1"><small>{tip}</small></p>
        <Button variant="link" className="p-0 fw-light lh-1" onClick={toggleFormType}>
          {formType === 'login' ? 'Sign up' : 'Login'}
        </Button>
      </div>
    </BSForm>
  );
};

export default Form;
