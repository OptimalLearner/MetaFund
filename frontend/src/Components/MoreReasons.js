import React from 'react'

function MoreReasons() {
    return (
        <div>
            <div className="flex items-center flex-col justify-center text-center w-[100%] h-[80vh] md:py-[25px] bg-blue-purple overflow-hidden">
                <div>
                    <h2 className="text-[32px] mb-[45px] font-semibold"> More Reasons To Love MetaFund </h2>
                </div>
                <div className="flex flex-row my-[40px] w-[80vw]">
                    <div className="flex flex-col w-[30%] mx-[1.6%] rounded-[5px]">
                        <h3 className="text-[22px] font-semibold pb-[15px]"> People-Centric Policies </h3>
                        <span className="text-[18px] pb-[15px]"> We make sure that people are always at the forefront. In addition to benefits, perks, incentives, and acknowledgement, we take a compassionate approach to leadership. </span>
                    </div>
                    <div className="flex flex-col w-[30%] mx-[1.6%] rounded-[5px]">
                        <h3 className="text-[22px] font-semibold pb-[15px]"> Innovative Technology and Design </h3>
                        <span className="text-[18px] pb-[15px]"> Technology and saving lives go hand-in-hand at Ketto! We continue to implement new and improved technology with the goal of helping as many people in need as we can. </span>
                    </div>
                    <div className="flex flex-col w-[30%] mx-[1.6%] rounded-[5px]">
                        <h3 className="text-[22px] font-semibold pb-[15px]"> Trust And Transparency </h3>
                        <span className="text-[18px] pb-[15px]"> With exceptional trust built, you can expect to donate and fundraise freely. Our priority is to bring trust and transparency into the system. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreReasons;