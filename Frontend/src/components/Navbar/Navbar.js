import React, { useEffect, useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../reducer/authSlice';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import decode from "jwt-decode";

import "./Navbar.css"
const NavigationBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isProfileDivOpen, setIsProfileDivOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [navbarToggle, setNavbarToggle] = useState(false);
    const location = useLocation();

    // console.log(user?.data?.result?.email);

    const logout = () => {
        dispatch(setLogout());
        setUser(null);
        navigate("/login");
    }
    useEffect(() => {
        const token = user?.token;

        //jwt
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }


        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [user?.token])
    return (
        <div className='navigationbar'>
            <div className='navigationbar_left'>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/about">
                    <span>About</span>
                </Link>
                <Link to="/reviews">
                    <span>Reviews</span>
                </Link>

            </div>
            <Link to="/" className='navigationbar_mid'>
                <span>☬𝓡𝓮𝓼𝓾𝓶𝓮 𝓑𝓾𝓲𝓵𝓭𝓮𝓻☬</span>
            </Link>
            <div className='navigationbar_right'>
                <Link to="/create">
                    <span>Create <AddCircleOutlineIcon /></span>
                </Link>
                <Link to="/design">
                    <span>Designs</span>
                </Link>
                <div className='navigationbar_right_signin'>
                    {user ?
                        <div >
                            <span style={{ fontSize: "0.7rem" }} onClick={() => setIsProfileDivOpen(!isProfileDivOpen)}>{user?.result?.email || user?.data?.result?.email}</span>
                            <div className={!isProfileDivOpen ? 'user_profile_page profileDivOpen' : "user_profile_page"} >
                                <Link to="/user/profile">
                                    <span>Profile</span>
                                </Link>
                                <span onClick={logout}>Logout</span>
                            </div>
                        </div>
                        :
                        <Link to="/login" className='navigationbar_right_signin_signIn_btn'>
                            <span >Sign In</span>
                        </Link>
                    }
                </div>
            </div>
            <div className='navbar_icon'>
                <DensityMediumIcon fontSize='large' onClick={() => setNavbarToggle(!navbarToggle)} style={{ color: "black", marginRight: "24px" }} />
                <div className={navbarToggle ? 'navbar_item_on_short_device' : 'navbar_item_on_short_device navbarToggleOn'} >
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                    <Link to="/about">
                        <span>About</span>
                    </Link>
                    <Link to="/create">
                        <span>Create <AddCircleOutlineIcon /></span>
                    </Link>
                    <Link to="/reviews">
                        <span>Reviews</span>
                    </Link>
                    <Link to="/docs">
                        <span>Help</span>
                    </Link>
                    <div className='navigationbar_right_signin'>
                        {user ?
                            <div >
                                <span onClick={() => setIsProfileDivOpen(!isProfileDivOpen)}>{user?.result?.email || user?.data?.result?.email}</span>
                                <div className={!isProfileDivOpen ? 'user_profile_page profileDivOpen' : "user_profile_page"} >
                                    <Link to="/user/profile">
                                        <span>Profile</span>
                                    </Link>
                                    <span onClick={logout}>Logout</span>
                                </div>
                            </div>
                            :
                            <Link to="/login" className='navigationbar_right_signin_signIn_btn'>
                                <span >Sign In</span>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavigationBar;
