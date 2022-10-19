import React from "react";
import img from '../Images/vector_img1.svg';

const InfoSection = () => {
    return (
        <div>
            <div className="flex flex-row h-[100vh] bg-blue-purple pt-[10vh] pb-[5vh] font-sans">
                <div className="w-full md:w-[60%] mx-[10%] flex justify-center flex-col">
                    <span className="text-[32px] mb-[15px] font-semibold"> Crowdfunding Made Easy </span>
                    <span className="text-[22px] mb-[25px]"> Let's create a better tomorrow. You can raise money or make a donation and our platform will let you do that effortlessly from anywhere in the world. </span>
                    <div>
                        <button className="bg-mint-cream text-[18px] px-[40px] py-[7px] rounded-[5px]"> Get Started For Free </button>
                    </div>
                </div>
                <div className="w-full md:w-[50%] mr-[10%] flex justify-center items-center">
                    <img src={img} alt="Vector Image" className="w-[90%]" />
                </div>
            </div>
        </div>
    )
}

export default InfoSection;