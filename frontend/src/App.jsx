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
      {/* Layout Route contains an Oulet */}
      <Route path="/" element={<Layout />}>

        {/* This route is for when the User is not logged in */}
        <Route path="" element={<HomeContainer />} />

        {/* Login and Registration Pages */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

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

        {/* End of Dashboard Route */}
        </Route>

      {/* End of Layout Route */}
      </Route> 
    </Routes>
  );
}

export default App;
