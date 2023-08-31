import './App.css';
import { Route, Routes } from 'react-router';
import { Redirect } from 'react-router-dom';

// import Verify from './Components/Verify';
// import Login from './Components/Login';
// import SignIn from './Components/SignIn';
// import Home from './Components/Home';
// import Layout from './Components/Layout';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import HomeView from './views/HomeView';
import VerifyView from './views/VerifyView';
import ForgotPasswordView from './views/ForgotPassword';
import RecoveryView from './views/RecoveryView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="auth/verify" element={<VerifyView />} />
        <Route path="auth/login" element={<LoginView />} />
        <Route path="auth/recovery" element={<RecoveryView />} />
        <Route path="auth/sign-up" element={<RegisterView />} />
        <Route path="auth/forgot-password" element={<ForgotPasswordView />} />
      </Routes>
    </div>
  );
}

export default App;

// {/* <Layout /> */}
// <Redirect to={'auth/login'} />
// <Routes>
//   {/* <Route path="/" element={<Home />} /> */}
//   <Route path="auth/verify" element={<Verify />} />
//   <Route path="auth/login" element={<Login />} />
//   <Route path="auth/sign-in" element={<SignIn />} />
// </Routes>
// {/* <Verify />
// <SingIn />
// <Login /> */}
