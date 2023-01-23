import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavigationBar from '../Navbar/Navbar';


import "./LandingPage.css"
const LandingPage = () => {

    return (
        <div className='landing_page'>
            <NavigationBar />
            <div className='landing_page_main'>
                <div className='landing_page_div'>
                    <img src="https://shop.joieriarovira.com/8445-thickbox_default/montblanc-ballpoint-pen-117659-pix-white-ball-pen.jpg" alt="pen.jpeg" />
                    <div className='landing_page_content'>
                        <span className='landing_page_content_heading'>Resume builder</span>
                        <Link to="/demo" className='landing_page_content_demo'>
                            <span >Demo</span>
                        </Link>
                    </div>
                </div>
                <div className='landing_page_div_learnMore'>
                    <span>Learn more</span>
                    <KeyboardArrowDownIcon className='landing_page_div_icon' />
                </div>
                <div className='landing_page_main_bottom'>
                    <h3>Designed with every word in your mind.</h3>
                    <p>When designer and philospher work together to create a simple, affordable, surprisingly enjoyable resume build.</p>
                    <img src="https://img.freepik.com/free-photo/education-concept-pen-notebooks-white-table_117358-137.jpg?size=626&ext=jpg" alt="img.png" />

                </div>

            </div>
        </div>
    )
}

export default LandingPage
