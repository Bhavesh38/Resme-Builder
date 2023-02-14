import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { gapi } from 'gapi-script';
import Icon from './Icon';
import { setAuth } from "../../reducer/authSlice.js";
import { GoogleLogin } from "react-google-login";
import "./Login.css"
import { login } from '../../actions/auth';
import { Button } from '@mui/material';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [isSignup, setIsSignup] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(login(loginFormData, navigate));
        // setLoginFormData({
        //     email: "",
        //     password: ""
        // })
    };

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
                    <input required type="email" placeholder='Email' name="email" value={loginFormData.email} onChange={handleChange} />
                    <input required type="password" placeholder='Password' name="password" value={loginFormData.password} onChange={handleChange} />

                    <button>Sign in</button>
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
                        <span>Sign in with Google</span> */}
                    </div>
                    <p>
                        New Resume Builder?
                        <Link to="/register">
                            <span> Register here</span>
                        </Link>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default Login
