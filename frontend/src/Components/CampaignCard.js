import React from 'react';
import { Link } from 'react-router-dom';

function CampaignCard({data}) {

    return (
        <div>
            <div className="relative flex flex-col text-left shadow-3xl w-[25vw] h-[500px] m-[15px] rounded-[5px]">
            <span className="absolute top-[15px] left-[-5px] bg-blue-purple text-black text-[18px] py-[5px] px-[15px] rounded-r-[25px]"> {data.category} </span>
                <img src="https://images.squarespace-cdn.com/content/v1/57220f5e555986178fe7d299/1559237277293-XTFNZ0DW3V968ET4CDMX/Current%2BTuirtion%2BCenter%2B1.jpg?format=1500w" alt="" className="w-full h-[45%]" />
                <div className="p-[20px]">
                    <h3 className="text-[18px] mb-[10px]"> {data.title} </h3>
                    <span className="text-[15px]"> by <strong> {data.createdby} </strong> </span>
                    <p className="text-[17px] mt-[10px]"> {data.raised.$numberDecimal} MAT out of {data.goal.$numberDecimal} MAT raised </p>
                    <div className="h-[25px] w-[100%] bg-platinum mt-[5px] mb-[10px] rounded-[40px] shadow-1xl">
                        <div className="h-[100%] w-[40%] bg-blue-purple rounded-[40px] text-center">
                            <span className="p-[20px] font-bolder text-[#000000]"> {data.raised.$numberDecimal / data.goal.$numberDecimal * 100}% </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex jusify-center text-[15px]">
                            <span className="material-symbols-outlined mr-[5px]"> schedule </span> <span> {data.deadline} Days Left </span>
                        </div>
                        <div className="flex jusify-center text-[15px]">
                            <span className="material-symbols-outlined mr-[5px]"> favorite </span> <span> {data.count} Supporters </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-[20px]">
                        <div className="flex jusify-center text-[15px]">
                            <button className="bg-platinum py-[5px] px-[50px] rounded-[5px]"> Share </button>
                        </div>
                        <div className="flex jusify-center text-[15px]">
                            <Link href="#" className="flex items-center" to="/detailed-campaign-view" state={{ data }}>
                                <button className="bg-blue-purple py-[5px] px-[50px] rounded-[5px]"> Donate </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard;