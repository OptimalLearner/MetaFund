import React from 'react';

function CampaignCard() {
    return (
        <div>
            <div className="flex flex-col text-left shadow-3xl w-[25vw] h-[500px] m-[15px] rounded-[5px]">
                <img src="https://images.squarespace-cdn.com/content/v1/57220f5e555986178fe7d299/1559237277293-XTFNZ0DW3V968ET4CDMX/Current%2BTuirtion%2BCenter%2B1.jpg?format=1500w" alt="" className="w-full h-[45%]" />
                <div className="p-[20px]">
                    <h3 className="text-[18px] mb-[10px]"> Empower children from disadvantaged communities with quality education </h3>
                    <span className="text-[15px]"> by <strong> 0x1ed96b4afc32a1c423ff253e4ce4f7b37...... </strong> </span>
                    <p className="text-[17px] mt-[10px]"> 20 MAT out of 50 MAT raised </p>
                    <div className="h-[25px] w-[100%] bg-platinum mt-[5px] mb-[10px] rounded-[40px] shadow-1xl">
                        <div className="h-[100%] w-[40%] bg-blue-purple rounded-[40px] text-center">
                            <span className="p-[20px] font-bolder text-[#000000]"> 40% </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex jusify-center text-[15px]">
                            <span class="material-symbols-outlined mr-[5px]"> schedule </span> <span> 6 Days Left </span>
                        </div>
                        <div className="flex jusify-center text-[15px]">
                            <span class="material-symbols-outlined mr-[5px]"> favorite </span> <span> 45 Supporters </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-[20px]">
                        <div className="flex jusify-center text-[15px]">
                            <button className="bg-platinum py-[5px] px-[50px] rounded-[5px]"> Share </button>
                        </div>
                        <div className="flex jusify-center text-[15px]">
                            <button className="bg-blue-purple py-[5px] px-[50px] rounded-[5px]"> Donate </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard;