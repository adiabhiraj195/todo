import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { CardProvider } from './context/cardContext';
import RegisterPage from './pages/register/register.page';
import Login from './pages/login/login.page';
import MainPage from './pages/main/main.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <CardProvider>
            <Routes>
              {/* <Route path='/register' Component={RegisterPage} />
              <Route path='/' Component={Login} /> */}
              <Route path='/' Component={MainPage} />
            </Routes>
          </CardProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
