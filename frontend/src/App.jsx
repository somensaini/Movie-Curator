import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import HomeContainer from './components/HomeContainer'
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dashboard from './components/Dashboard'
import List from './components/List'
import Profile from './components/Profile'
import Search from './components/Search'

function App() {
  return (
    <Routes>

      {/* Layout Route contains an Outlet that is the main component*/}
      <Route path="/" element={<Layout />}>

        {/* Public Routes */}
        {/* Homepage when not logged in, login page, and registration page. */}
        <Route path="" element={<HomeContainer />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected Routes -- START*/}
        {/* Dashboard Route contains the Header and Footer */}
        <Route path="dashboard" element={<Dashboard />}>

          <Route> 
            {/* Displays New and Popular when on /dashboard */}
            <Route index element={<Home />} />
          </Route>

          <Route path="user">
            {/* Displays User's profile */}
            <Route index element={<Profile />} />
          </Route>

          <Route path="list">
            {/* Displays User's list */}
            <Route index element={<List />} />
          </Route>

          <Route path="search">
            {/* Displays Search page */}
            <Route index element={<Search />} />
          </Route>

        </Route>{/* Protected Routes -- END */}
      </Route> 
    </Routes>
  );
}

export default App;