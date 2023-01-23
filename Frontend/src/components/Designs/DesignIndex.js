import React, { useState } from 'react'
import AllDesigns from './AllDesigns';
import CreateDesign from './CreateDesign';
import "./DesignIndex.css"
const DesignIndex = () => {
    const [activeAllDesigns, setActiveAllDesigns] = useState(true);
    const [activeContributeDesigns, setActiveContributeDesigns] = useState(false);

    const handleSelectAllDesignsClick = () => {
        setActiveAllDesigns(true);
        setActiveContributeDesigns(false);
    };

    const handleContributeDesignClick = () => {
        setActiveAllDesigns(false);
        setActiveContributeDesigns(true);
    }

    return (
        <div className='designindex'>
            <div className='designindex_heading'>
                <h2 className={activeAllDesigns && 'designindex_heading_border_bottom'} onClick={handleSelectAllDesignsClick}>Select Design</h2>
                <h2 className={activeContributeDesigns && 'designindex_heading_border_bottom'} onClick={handleContributeDesignClick}>Contribute a Design</h2>
            </div>

            {activeAllDesigns && <AllDesigns />}
            {activeContributeDesigns && <CreateDesign />}
        </div>
    )
}

export default DesignIndex

