import React, { useState, useContext } from 'react'
import InputField from '../../component/atom/inputField';
import validator from 'validator';
import UserService from '../../service/user-service';
import "./login.css";
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../context/authContext';
import useData from '../../hooks/useData';

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    // const navigate = useNavigate();
    const { login } = useAuth();
    const { setToggleLogin, setToggleSignin } = useContext(AuthContext);
    const { getUserData } = useData();

    const validate = () => {
        let isValid = true;
        if (!validator.isEmail(email)) {
            isValid = false;
        };
        if (!(password.length >= 8 && password.length <= 24)) {
            isValid = false;
        };

        return isValid;
    }

    const loginUser = async () => {
        // e.preventDefault();
        if (!validate()) {
            return;
        }

        try {
            const result = await UserService.login({ email, password });
            // localStorage.setItem("Token", result.data.accessToken);
            await login(result.data.accessToken);
            // await getUserData();
            // console.log(result, result.data.accessToken);
            // navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    }
    const toggleLogin = () => {
        setToggleLogin(false);
        setToggleSignin(true);
    }
    const handleOnInputEmail = (value: string) => {
        setEmail(value);
    };
    const handelOnInputPassword = (value: string) => {
        setPassword(value);
    };
    // const handleOnKeyPress = (event: KeyboardEvent) => {
    //     if (event.key === 'Enter') loginUser();
    // };
    return (
        <div className='auth-page'>
            <div className='auth-container'>
                <h2>Login!</h2>
                <div className='input-conatiner'>
                    <InputField
                        id='login-email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onInput={handleOnInputEmail}
                        label='Email'
                    />
                    <InputField
                        id='login-password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onInput={handelOnInputPassword}
                        label='Password'
                    />
                </div>
                <div className='register-link-container'>
                    <p onClick={toggleLogin}>register as new user</p>
                </div>
                <div className='btn-container'>
                    <button className='login-btn' onClick={loginUser}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;