import { Navigate, Route, Routes } from 'react-router-dom';
// Components
import SiteLoader from './Components/Site-Loader/Site-Loader';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <>
      <SiteLoader />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/Sign-up' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} /> 
        <Route path='/'  element={<Navigate to='/login' replace/>} />
      </Routes>
    </>
  );
}

export default App;