import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import { useNavigate ,navigate } from 'react-router-dom';

const AdminSignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    let validationErrors = {
      // email : "Invalid email format",
      // password : "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number"
    };

    if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!validatePassword(password)) {
      validationErrors.password = "Invalid Password format";
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords does not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      const res = await axios.post('http://localhost:8000/admin-signup', {
        email: email,
        password: password
      });
      if (res.status === 200) {
        setSuccessMessage("SIGNED UP SUCCESSFULLY");
      }
      console.log('Sign-up successful!', res.data);
    } catch (error) {
      console.error('Sign-up error:', error);
      setErrors({ form: 'An error occurred during sign up.Please try again.' });
    } finally {
      setIsSubmitting(false);
    }

    
  };

  return (
    <div class='container'>
      <div class="outer-container">
        <div class="signup-container">
          <label>Sign Up</label>
          <div class="inputs">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              disabled={isSubmitting}
            />
            {errors.email && <p className='error-text'>{errors.email}</p>}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              disabled={isSubmitting}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              type="password"
            />
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

          </div>
          <button
            onClick={handleSubmit}
            class="button signup-button"
            disabled={isSubmitting}
          >
            Sign Up
          </button>
          {errors.form && <p className="error-form">{errors.form}</p>}
          {successMessage && <p className="success-text">{successMessage}</p>}
          <div class="links">
            <p onClick={()=>navigate("/admin-login")} class="link-text">Already have an account? Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignupPage;