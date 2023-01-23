import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    const [message, setMessage] = useState("");
    const handleClick = () => {
        console.log(message);
        setMessage("");
    }
    return (
        <footer className='footer'>
            <div className='footer_top'>
                <form className='footer_form'>
                    <span>*No Payment required</span>
                    <h4>Leave a Message.</h4>
                    <div>
                        <input placeholder='type message...' name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <SendIcon className='footer_form_icon' style={{ fontSize: "1.8rem" }} onClick={handleClick} />
                    </div>
                    <hr />
                </form>
                {/* <img src="https://i.redd.it/7c2pvum3wu801.jpg" alt="img.png" /> */}
            </div>
            <div className='footer_bottom'>
                <div className='footer_bottom_top'>
                    <span>꧁༒☬𝓡𝓮𝓼𝓾𝓶𝓮 𝓑𝓾𝓲𝓵𝓭𝓮𝓻☬༒꧂</span>
                    <p>Make the professional and impressive resume in minutes.</p>
                </div>
                <div className='footer_bottom_mid'>
                    <div>
                        <Link to="/about">
                            <span>About</span>
                        </Link>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                        <Link to="/docs">
                            <span>Docs</span>
                        </Link>

                    </div>
                    <div>
                        <Link to="docs">
                            <span>Terms and Conditions</span>
                        </Link>
                        <Link to="docs">
                            <span>Privacy</span>
                        </Link>
                        <Link to="docs">
                            <span>Cookie Policy</span>
                        </Link>
                    </div>
                </div>
                <div className='footer_bottom_bottom'>
                    <span>resumebuilder38@gmail.com</span>
                    <div className='footer_bottom_bottom_icons'>
                        <FacebookIcon className='footer_bottom_bottom_icons_icon' />
                        <TwitterIcon className='footer_bottom_bottom_icons_icon' />
                        <LinkedInIcon className='footer_bottom_bottom_icons_icon' />
                        <InstagramIcon className='footer_bottom_bottom_icons_icon' />
                    </div>
                    <span style={{ fontSize: "0.6rem", marginTop: "6px" }}>All Copyright reserved to <strong>Bhavesh kumar</strong> (2023-24).</span>
                </div>
                {/* <div className='footer_btm'>
                    <span>Made with ❤ by <strong>Bhavesh kumar</strong> at Kolkata.</span>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer
