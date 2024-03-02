import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../reducers/userSlice';
import { validateLogin } from '../../utils/loginValidation';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorList = validateLogin(formData);
    if (Object.keys(errorList).length === 0) {
      // Replace with actual API call or authentication logic
      const mockUserInfo = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'johndoe@example.com'
        // ...other user information
      };
      dispatch(loginSuccess(mockUserInfo));
      navigate('/dashboard');
    } else {
      setErrors(errorList);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">Login</button>
                </div>
                {errors.all && <span className="text-danger">{errors.all}</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
