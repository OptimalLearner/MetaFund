import React from 'react';
import img from '../Images/together.jpg';

function QuoteSection() {
    return (
        <div>
            <div className="flex flex-row h-[80vh] bg-white text-black pt-[10vh] pb-[5vh] font-sans">
                <div className="w-full md:w-[60%] mx-[10%] flex justify-center items-center">
                    <img src={img} alt="Vector Image" className="w-[600px]" />
                </div>
                <div className="w-full md:w-[50%] mr-[10%] flex justify-center flex-col">
                    <span className="text-[36px] mb-[15px] font-semibold"> Doing Good Today Will Be Multiplied In The Future </span>
                </div>
            </div>
        </div>
    )
}

export default QuoteSection