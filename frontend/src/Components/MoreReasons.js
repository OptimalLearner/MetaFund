import React from 'react';
import peopleImg from '../Images/people.svg';
import innovationImg from '../Images/innovation.svg';
import trustImg from '../Images/trust.svg';

function MoreReasons() {
    return (
        <div>
            <div className="flex items-center flex-col justify-center text-center w-[100%] h-[700px] md:py-[20px] bg-blue-purple text-black overflow-hidden">
                <div>
                    <h2 className="text-[32px] mb-[45px] font-semibold"> More Reasons To Love MetaFund </h2>
                </div>
                <div className="flex flex-row my-[40px] w-[80vw]">
                    <div className="flex flex-col items-center w-[30%] mx-[1.6%] rounded-[5px]">
                        <img src={peopleImg} alt="People-Centric Policies" className="w-[150px] h-[150px] mb-[15px]" />
                        <h3 className="text-[22px] font-semibold pb-[15px]"> People-Centric Policies </h3>
                        <span className="text-[18px] pb-[15px]"> We make sure that people are always at the forefront. In addition to benefits, perks, incentives, and acknowledgement, we take a compassionate approach to leadership. </span>
                    </div>
                    <div className="flex flex-col items-center w-[30%] mx-[1.6%] rounded-[5px]">
                        <img src={innovationImg} alt="Innovative Technology and Design" className="w-[150px] h-[150px] mb-[15px]" />
                        <h3 className="text-[22px] font-semibold pb-[15px]"> Innovative Technology and Design </h3>
                        <span className="text-[18px] pb-[15px]"> Technology and saving lives go hand-in-hand! We continue to implement new and improved technology with the goal of helping as many people in need as we can. </span>
                    </div>
                    <div className="flex flex-col items-center w-[30%] mx-[1.6%] rounded-[5px]">
                        <img src={trustImg} alt="Trust and Transparency" className="w-[150px] h-[150px] mb-[15px]" />
                        <h3 className="text-[22px] font-semibold pb-[15px]"> Trust and Transparency </h3>
                        <span className="text-[18px] pb-[15px]"> With exceptional trust built, you can expect to donate and fundraise freely. Our priority is to bring trust and transparency into the system. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreReasons;