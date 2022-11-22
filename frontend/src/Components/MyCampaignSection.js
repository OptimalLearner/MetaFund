import React from 'react';
import CampaignCard from './CampaignCard';

function MyCampaignSection() {
    return (
        <div>
            <div className="flex flex-row justify-center my-[20px] flex-wrap">
                <CampaignCard />
            </div>
        </div>
    )
}

export default MyCampaignSection;