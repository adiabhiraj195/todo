import { useState, useContext } from 'react';
import InputField from '../../component/atom/inputField';
import validator from 'validator';
import './register.css';
import UserService from '../../service/user-service';
import { AuthContext } from '../../context/authContext';

const RegisterPage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const { setToggleLogin, setToggleSignin } = useContext(AuthContext);

    const validateData = () => {
        let isValid = true;
        if (!validator.isEmail(email)) {
            isValid = false;
        };
        if (!(password1.length >= 8 && password2.length <= 24)) {
            isValid = false;
        }
        if (password1 !== password2) {
            isValid = false;
        };
        return isValid;
    }

    const registerUser = async (e: any) => {
        e.preventDefault();
        if (!validateData()) {
            return;
        }
        try {
            await UserService.register({
                name,
                email,
                password1,
                password2
            });
            setToggleSignin(false);
            setToggleLogin(true);
            console.log("done");
            // navigate("/");

        } catch (error) {
            console.error(error)
        }
    }
    const handleOnInputName = (value: string) => {
        setName(value);
        // console.log(name)
    }
    const handleOnInputEmail = (value: string) => {
        setEmail(value);
    }
    const handleOnInputPassword1 = (value: string) => {
        setPassword1(value);
    }
    const handleOnInputPassword2 = (value: string) => {
        setPassword2(value);
    }
    const toggleSignin = () => {
        setToggleLogin(true);
        setToggleSignin(false);
    }
    return (
        <div className='auth-page'>
            <div className='auth-container'>
                <h2>Register</h2>
                <div className='input-container'>
                    <InputField
                        id='fullName-register'
                        value={name}
                        placeholder='Full Name'
                        type='text'
                        onInput={handleOnInputName}
                        label='Full Name'
                    />
                    <InputField
                        id='email-register'
                        value={email}
                        placeholder='Email'
                        type='email'
                        onInput={handleOnInputEmail}
                        label='Email'
                    />
                    <InputField
                        id='passowrd-register'
                        value={password1}
                        placeholder='Password'
                        type='password'
                        onInput={handleOnInputPassword1}
                        label='Password'
                    />
                    <InputField
                        id='confirm-password-register'
                        value={password2}
                        placeholder='Confirm Password'
                        type='password'
                        onInput={handleOnInputPassword2}
                        label='Confirm Password'
                    />
                </div>
                <div className='login-link-container'>
                    <p onClick={toggleSignin}>already have account!</p>
                </div>
                <div className="btn-container">
                    <button className='register-btn' onClick={registerUser}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;