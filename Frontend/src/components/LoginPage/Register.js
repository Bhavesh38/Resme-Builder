import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; import { register } from '../../actions/auth';
import { gapi } from 'gapi-script';
import { setAuth } from '../../reducer/authSlice';
import GoogleLogin from 'react-google-login';
import { Button } from '@mui/material';
import Icon from './Icon';

import "./Login.css";
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [registerationFormData, setRegisterationFormData] = useState({
        email: "",
        password: "",
        cPassword: ""
    });

    const handleChange = (e) => {
        setRegisterationFormData({
            ...registerationFormData,
            [e.target.name]: e.target.value
        });

    };
    const handleClick = (e) => {
        e.preventDefault();
        // console.log(registerationFormData);
        if (registerationFormData.password === registerationFormData.cPassword) {
            dispatch(register(registerationFormData, navigate));
            // setLoginFormData({
            //     email: "",
            //     password: "",
            //     cPassword: ""
            // });
        } else {
            window.alert("Password Doesn't match");
            setRegisterationFormData({
                ...registerationFormData,
                password: "",
                cPassword: ""
            })
            registerationFormData.password = "";
            registerationFormData.cPassword = "";
        }



    }


    //google authentication
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "1025638654841-7rmqno4dvtik2t9gnfdl2qg6gsnmdnbp.apps.googleusercontent.com",
                scope: 'email',
            });
        }
        gapi.load('client:auth2', start);
    }, []);
    const googleSuccess = async (res) => {

        const result = res?.profileObj;
        const token = res?.tokenId;
        console.log("Login successful.");
        if (res) {
            console.log(res);
        }

        try {
            dispatch(setAuth({ data: { result, token } }))
            navigate("/")
            // window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (err) => {
        console.log("Google Sign In was unsuccessful. Try Again Later.");
        console.log(err);
    }
    return (
        <div className='login'>
            <div className='login_main'>
                <h3>꧁༒☬𝓡𝓮𝓼𝓾𝓶𝓮 𝓑𝓾𝓲𝓵𝓭𝓮𝓻☬༒꧂</h3>
                <form className='login_form' onSubmit={handleClick}>
                    <span>Welcome to Resume Builder</span>
                    <p>Registration</p>
                    <input required type="email" placeholder='Email' name="email" onChange={handleChange} value={registerationFormData.email} />
                    <input required type="password" placeholder='Password' name="password" onChange={handleChange} value={registerationFormData.password} />
                    <input required type="password" placeholder='Confirm Password' name="cPassword" onChange={handleChange} value={registerationFormData.cPassword} />

                    <button >Sign up</button>
                    <div className='login_form_or_div'>
                        <hr />
                        <span>or</span>
                        <hr />
                    </div>
                    <div className='login_form_google'>
                        <GoogleLogin clientId="1025638654841-7rmqno4dvtik2t9gnfdl2qg6gsnmdnbp.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button
                                    color="primary"
                                    fullWidth
                                    onClick={renderProps.onClick} disabled={renderProps.disabled}
                                    startIcon={<Icon />} variant="contained">
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        {/* <GoogleIcon className='login_form_google_icon' />
                        <span>Sign up with Google</span> */}
                    </div>
                    <p>
                        Already have an account?
                        <Link to="/login">
                            <span> Login here</span>
                        </Link>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default Register
