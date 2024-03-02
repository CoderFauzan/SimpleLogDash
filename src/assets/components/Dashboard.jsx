import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers/userSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h1 className="text-center">Welcome, {userInfo.name}!</h1>
            </div>
            <div className="card-body">
              {/* Display user information here */}
              {Object.entries(userInfo).map(([key, value]) => (
                <div key={key} className="user-info-item">
                  <strong>{key}:</strong> {value}
                </div>
              ))}
              <button className="btn btn-primary btn-block" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
