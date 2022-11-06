import React from 'react';
import user from '../Images/user_avatar.jpg';

function MeetOurTeam() {
    return (
        <div>
            <div className="flex items-center flex-col justify-center text-center w-[100%] h-[550px] md:py-[20px] bg-mint-cream overflow-hidden">
                <div>
                    <h2 className="text-[32px] mt-[25px] mb-[45px] font-semibold"> Meet Our Team </h2>
                </div>
                <div className="flex flex-row my-[40px] w-[80vw]">
                    <div className="flex flex-col items-center w-[30%] mx-[1.6%]">
                        <img src={user} alt="Rohan Shinde Profile Pic" className="w-[200px] h-[200px] mb-[15px] rounded-[10px]" />
                        <h3 className="text-[22px] font-semibold pb-[5px]"> Rohan Shinde </h3>
                        <span className="text-[18px] pb-[15px]"> Co-Founder and CEO </span>
                    </div>
                    <div className="flex flex-col items-center w-[30%] mx-[1.6%]">
                        <img src={user} alt="Sahil Chorghe Profile Pic" className="w-[200px] h-[200px] mb-[15px] rounded-[10px]" />
                        <h3 className="text-[22px] font-semibold pb-[5px]"> Sahil Chorghe </h3>
                        <span className="text-[18px] pb-[15px]"> Co-Founder and CFO </span>
                    </div>
                    <div className="flex flex-col items-center w-[30%] mx-[1.6%]">
                        <img src={user} alt="Keval Dhanani Profile Pic" className="w-[200px] h-[200px] mb-[15px] rounded-[10px]" />
                        <h3 className="text-[22px] font-semibold pb-[5px]"> Keval Dhanani </h3>
                        <span className="text-[18px] pb-[15px]"> Co-Founder and CTO </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetOurTeam;