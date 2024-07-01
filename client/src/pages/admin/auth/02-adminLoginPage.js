import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import { useNavigate ,navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { assignUserRole, setLoginDetails } from '../../../redux/reducers/userSlice'


const AdminLoginPage= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/admin-login', {
        email,
        password
      });

      if(response.status === 200){
        const res = response.data;
                dispatch(assignUserRole(res.userRole));
                dispatch(
                    setLoginDetails({
                        isLoggedIn: true,
                        userDbId: res?.id,
                        userDept: res?.department,
                        email: res?.email,
                        name: res?.name,
                        token: res?.token
                      })
                    );
                    
      }

      console.log('Login successful!', response.data);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='container'>
      <div className="outer-container">
        <div className="signup-container">
          <label>Login</label>
          <div className="inputs">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="button signup-button"
          >
            Login
          </button>
          <div className="links">
            <p onClick={()=>navigate("/admin-signup")} className="link-text">Don't have an account? Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;