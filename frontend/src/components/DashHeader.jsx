import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const navigate = useNavigate()
const handleLogout = async () => {
    try {
      // Clear session storage
      sessionStorage.removeItem('user');
  
      // Make a POST request to the logout endpoint
      await axios.post("https://movie-curator-api.onrender.com/logout");
  
      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const DashHeader = () => {
    return (
      <nav>
        <ul>
          <li className="header--nav--links">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="header--nav--links">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="header--nav--links">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default DashHeader;

