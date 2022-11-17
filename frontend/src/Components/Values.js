import React from 'react';

const Values = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="w-0 h-0 border-l-[49.5vw] border-l-white border-t-[90vh] border-t-blue-purple border-r-[49.5vw] border-r-white"></div>
            <div className="flex flex-row justify-center items-center bg-white font-sans text-black">
                <div className="flex text-center w-[70vw] md:px-[40px] md:py-[25px] bg-white flex flex-col shadow-1xl rounded-[5px] absolute top-[15%] left-[50%] translate-x-[-50%]">
                    <div>
                        <h2 className="text-[32px] mb-[15px] font-semibold"> Our Values </h2>
                        <span className="text-[18px]"> With simplicity at the core of our prioirties, we aim to make your journey as easy and enjoyable as possible by improving every component involved in crowdfunding </span>
                    </div>
                    <div className="flex flex-row my-[40px]">
                        <div className="flex flex-col shadow-1xl w-[30%] mx-[2.5%] rounded-[5px]">
                            <span class="material-symbols-outlined text-[80px] py-[25px]">medical_services</span>
                            <span className="text-[18px] pb-[15px]"> Donate for medical aid </span>
                        </div>
                        <div className="flex flex-col shadow-1xl w-[30%] mx-[2.5%] rounded-[5px]">
                            <span class="material-symbols-outlined text-[80px] py-[25px]">menu_book</span>
                            <span className="text-[18px] pb-[15px]"> Help the needy with their education </span>
                        </div>
                        <div className="flex flex-col shadow-1xl w-[30%] mx-[2.5%] rounded-[5px]">
                            <span class="material-symbols-outlined text-[80px] py-[25px]">account_balance</span>
                            <span className="text-[18px] pb-[15px]"> Invest in new startups </span>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Values;