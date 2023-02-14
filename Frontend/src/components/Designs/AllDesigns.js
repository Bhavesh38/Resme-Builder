import React from 'react';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

import "./AllDesigns.css";
const AllDesigns = () => {
    return (
        <div className='allDesign'>
            <div className='allDesign_heading'>
                <h4>Select any design to proceed.</h4>
                <button>Select & Proceed <KeyboardTabIcon /></button>
            </div>
            <div className='allDesign_content'>
                <div className='allDesign_content_designs_examples'>
                    <img alt="img.png" />
                    <input type="checkbox" />
                </div>
                <div className='allDesign_content_designs_examples_preview'>
                    design allDesign_content_designs_examples_preview
                </div>
            </div>
            <button className='proceed_button'>
                Proceed <KeyboardTabIcon />
            </button>
        </div>
    )
}

export default AllDesigns
