import React, { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import './navbar.css';

const NavigationBar = () => {
    const { isLogedIn, userName, setToggleLogin, setToggleSignin } = useContext(AuthContext);

    const toggleLogin = () => {
        setToggleLogin(true);
    }
    const toggleSignin = () => {
        setToggleSignin(true);
    }
    return (
        <div className='navbar-wrap'>
            <h3 className='navbar-heading'>Project Management</h3>
            <div className='nav-auth-container'>
                {isLogedIn ? <>
                    <div className='nav-user-name-wrap'>
                        <p className='nav-welcome-p'>Welcome<span>{userName}</span></p>
                    </div>
                    <div className='user-logo-wrap'>
                        <p>{userName?.slice(0, 1).toUpperCase()}</p>
                    </div>
                </> : <>
                    <button className='nav-login-btn nav-btn' onClick={toggleLogin}>Login</button>
                    <button className='nav-sigin-btn nav-btn' onClick={toggleSignin}>Signin</button>
                </>}
            </div>
        </div>
    )
}

export default NavigationBar;