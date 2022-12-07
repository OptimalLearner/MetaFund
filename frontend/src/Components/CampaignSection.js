import React, {useEffect, useState} from 'react';
import CampaignCard from './CampaignCard';
import axios from 'axios';

let CampaignSection = () => {

    const [campaign, setCampaign] = useState([]);
    
    useEffect(() => {
        const dd = async() => {
            await axios
            .get(`http://localhost:5000/getCampaigns`)
            .then(function (response) {
              let d = response.data
            //   console.log(d)
              setCampaign(d.campaigns);
              return d;
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        dd();
    }, [])
    
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-[50px] font-sans">
                <input type='text' placeholder='Search For Fundraisers' className="mb-[15px] bg-white text-black border-2 border-black px-[20px] py-[10px] w-[600px] rounded-[5px]" />
                <div className="flex items-center mt-[25px]">
                    <span className="mr-[15px] text-[18px]"> Filter out fundraisers based on the type of cause </span>
                    <span className="bg-blue-purple text-black text-[18px] font-medium mx-[5px] px-[15px] py-[2.5px] rounded">All</span>
                    <span className="bg-blue-purple text-black text-[18px] font-medium mx-[5px] px-[15px] py-[2.5px] rounded">Education</span>
                    <span className="bg-blue-purple text-black text-[18px] font-medium mx-[5px] px-[15px] py-[2.5px] rounded">Medical</span>
                    <span className="bg-blue-purple text-black text-[18px] font-medium mx-[5px] px-[15px] py-[2.5px] rounded">NGOs</span>
                    <span className="bg-blue-purple text-black text-[18px] font-medium mx-[5px] px-[15px] py-[2.5px] rounded">Startups</span>
                </div>
            </div>
            
                {campaign != [] ? 
                <div className="flex flex-row justify-center my-[20px] flex-wrap">

                    {campaign.map(item => (
                        // console.log(item)
						 <CampaignCard key={item.title} data={item} />
					))}
                </div>
                :
                <h1>Loading ...</h1>
                }
            <div className="flex flex-row justify-center my-[40px]">
                <button variant="gradient" size="lg" className="bg-blue-purple py-[10px] px-[25px] text-[18px] rounded-[5px]"> Load More Campaigns </button>
            </div>
        </div>
    )
}

export default CampaignSection;