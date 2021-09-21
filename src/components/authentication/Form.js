import { useState } from 'react';
import { Form as BSForm, Button } from 'react-bootstrap';
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
    setTitle(formType === 'login' ? 'Sign up now' : 'Login');
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
    if (error.response.status >= 500) return 'Server error';

    if (error.response.status >= 400) {
      if (formType === 'login') return 'Invalid username or password';

      let message = '';
      Object.entries(error.response.data).forEach(([key, value]) => {
        message += `${key.toUpperCase()} ${value}.\n`;
      });
      return message;
    }
    return 'Something went wrong';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setIsDisabled(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    const callback = formType === 'login' ? authenticateUser : registerUser;

    toast.promise((callback.bind(null, user)), {
      pending: { render: () => (formType === 'login' ? 'Logging in...' : 'Registering...') },
      success: { render: ({ data }) => successCallback(data) },
      error: { render: ({ data }) => errorCallback(data) },
    },
    { autoClose: false });
    setIsDisabled(false);
  };

  const formGroup = (name, label, type) => (
    <BSForm.Group className="mb-3" controlId={name}>
      <BSForm.Label className="mb-0">{label}</BSForm.Label>
      <BSForm.Control name={name} type={type} required placeholder={label} disabled={isDisabled} />
    </BSForm.Group>
  );

  return (
    <BSForm className="px-3 py-5 shadow border border-4 border-primary alert-primary rounded-2" onSubmit={handleSubmit}>
      <h1 className="h4 fw-bold text-end">{title}</h1>

      {formGroup('email', 'Email', 'email')}
      {formGroup('password', 'Password', 'password')}

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
