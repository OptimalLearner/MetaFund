import React from 'react';
import CampaignCard from './CampaignCard';

function DonatedCampaignSection() {
    return (
        <div>
            <div className="flex flex-row justify-center my-[20px] flex-wrap">
                <CampaignCard />
                <CampaignCard />
            </div>
        </div>
    )
}

export default DonatedCampaignSection;