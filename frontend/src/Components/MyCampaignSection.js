import React, {useState, useEffect} from 'react';
import CampaignCard from './CampaignCard';
import axios from 'axios';

function MyCampaignSection() {

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
            <div className="flex flex-row justify-center my-[20px] flex-wrap">
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
            </div>
        </div>
    )
}

export default MyCampaignSection;