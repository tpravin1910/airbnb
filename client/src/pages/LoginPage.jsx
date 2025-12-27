import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';

import ProfilePage from './ProfilePage';
import { useAuth } from '../../hooks';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [redirect, setRedirect] = useState(false);
  const auth = useAuth();

  // Updates state as the user types
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.login(formData);
      if (response.success) {
        toast.success(response.message);
        setRedirect(true);
      } else {
        toast.error(response.message || 'Login failed');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    }
  };

  // Redirect to home or profile page upon successful login
  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4 font-bold">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            name="email"
            value={formData.email}
            onChange={handleFormData}
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleFormData}
            required
          />
          <button className="primary mt-2">Login</button>
          
          <div className="flex flex-col gap-2 mt-4 items-center">
             {/* Google Login integration as per your imports */}
            <GoogleLogin 
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                // Handle google login logic here
              }}
              onError={() => {
                toast.error('Google Login Failed');
              }}
            />
          </div>

          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{' '}
            <Link className="underline text-black" to={'/register'}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;