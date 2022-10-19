import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PaidIcon from '@mui/icons-material/Paid';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CelebrationIcon from '@mui/icons-material/Celebration';

function Services() {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center h-[100vh] bg-blue-purple pt-[10vh] pb-[5vh] font-sans">
                    <div>
                        <h2 className="text-[32px] mb-[5px] font-semibold"> Our Services </h2>
                    </div>
                    <div className="flex flex-col my-[20px]">
                        <div className="flex flex-row my-[40px] w-[90vw]">
                            <div className="flex flex-col w-[40%] mx-[2.5%] rounded-[5px] text-center">
                                <span className='py-[25px]'>
                                    <AccessibilityNewIcon sx={{ fontSize: "80px" }} />
                                </span>
                                <span className="text-[20px] pb-[15px] font-semibold"> Help People </span>
                            </div>
                            <div className="flex flex-col w-[40%] mx-[2.5%] rounded-[5px] text-center">
                                <span className='py-[25px]'>
                                    <PendingActionsIcon sx={{ fontSize: "80px" }} />
                                </span>
                                <span className="text-[20px] pb-[15px] font-semibold"> Take Action </span>
                            </div>
                            <div className="flex flex-col w-[40%] mx-[2.5%] rounded-[5px] text-center">
                                <span className='py-[25px]'>
                                    <CelebrationIcon sx={{ fontSize: "80px" }} />
                                </span>
                                <span className="text-[20px] pb-[15px] font-semibold"> Celebrate on Occasion </span>
                            </div>
                        </div>
                        <div className="flex flex-row my-[40px]">
                            <div className="flex flex-col w-[30%] mx-[2.5%] rounded-[5px] text-center">
                                <span className='py-[25px]'>
                                    <PaidIcon sx={{ fontSize: "80px" }} />
                                </span>
                                <span className="text-[20px] pb-[15px] font-semibold"> Charity </span>
                            </div>
                            <div className="flex flex-col w-[30%] mx-[2.5%] rounded-[5px] text-center">
                                <span className='py-[25px]'>
                                    <VolunteerActivismIcon sx={{ fontSize: "80px" }} />
                                </span>
                                <span className="text-[20px] pb-[15px] font-semibold"> Crowdfunding </span>
                            </div>
                            <div className="flex flex-col w-[30%] mx-[2.5%] rounded-[5px] text-center">
                                <span className='py-[25px]'>
                                    <ConnectWithoutContactIcon sx={{ fontSize: "80px" }} />
                                </span>
                                <span className="text-[20px] pb-[15px] font-semibold"> Connect With Others </span>
                            </div>
                        </div>
                    </div>               
            </div>
        </div>
    )
}

export default Services;