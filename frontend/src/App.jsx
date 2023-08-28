import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
// import Login from './features/auth/Login';
import Dashboard from './components/Dashboard'
import List from './components/List'
import Profile from './components/Profile'
import Search from './components/Search'
// import Welcome from './features/auth/Welcome'
// import NotesList from './features/notes/NotesList'
// import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}

        <Route path="dashboard" element={<Dashboard />}>

          <Route path="user">
            <Route index element={<Profile />} />
          </Route>

          <Route path="list">
            <Route index element={<List />} />
          </Route>

          <Route path="search">
            <Route index element={<Search />} />
          </Route>

        </Route>

      </Route>
    </Routes>
  );
}

export default App;
