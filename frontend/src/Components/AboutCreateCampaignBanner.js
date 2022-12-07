import React from 'react';
import { Link } from 'react-router-dom';

function AboutCreateCampaignBanner() {
    return (
        <div>
            <div className="flex justify-center items-center flex-col bg-blue-purple h-[400px] font-sans">
                <h2 className="text-[40px]"> Create Campaigns and Get Help From The World </h2>
                <Link className="bg-black text-blue-purple text-[18px] mt-[30px] py-[10px] px-[50px] rounded-[5px]" to="/create-campaign"> Create A New Campaign </Link>
            </div>
        </div>
    )
}

export default AboutCreateCampaignBanner;