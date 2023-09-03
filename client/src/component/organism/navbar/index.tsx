import React, { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import './navbar.css';
import useAuth from '../../../hooks/useAuth';
import UserService from '../../../service/user-service';

const NavigationBar = () => {
    const { isLogedIn, userName, setToggleLogin, setToggleSignin } = useContext(AuthContext);
    const {destroyAuth} = useAuth();
    const accessToken = localStorage.getItem('Token');

    const logout = async()=>{
        if(accessToken == null){
            destroyAuth();
            return
        }
        try {
            const response = await UserService.logout(accessToken);
            if(response.status == 200){
                destroyAuth();
            }
        } catch (error) {
            console.log(error)
        }
            
    }

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
                    {/* <div></div> */}
                    <button className='nav-btn' onClick={logout}>Log out</button>
                </> : <>
                    <button className='nav-login-btn nav-btn' onClick={toggleLogin}>Login</button>
                    <button className='nav-sigin-btn nav-btn' onClick={toggleSignin}>Signin</button>
                </>}
            </div>
        </div>
    )
}

export default NavigationBar;