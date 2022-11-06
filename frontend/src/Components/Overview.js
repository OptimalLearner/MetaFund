import React from 'react'

function Overview() {
    return (
        <div>
            <div className="flex flex-row h-[100vh] bg-mint-cream pt-[10vh] pb-[5vh] font-sans">
                <div className="w-full md:w-[60%] mx-[10%] text-justify flex justify-center flex-col">
                    <span className="text-[28px] mb-[10px] font-semibold"> About Us </span>
                    <span className="text-[18px] mb-[25px]"> MetaFund is an online crowdfunding blockchain based platform that enables anyone across India to raise funds for healthcare, education, disaster relief, startups and non-profits, with great ease. Founded in 2022 by a team of three young and passionate engineer-cum-entrepreneurs, MetaFund aims to help in the development of each and every person in need in India.
                    <br /><br />
                    MetaFund aims to be utilized by Indians to raise funds from friends, family and a wider social network for medical needs, loved ones and charity on a daily basis. MetaFund will soon become the go-to platform for funding early stage startups that provide tokens in return of the amount invested by the investors. </span>
                </div>
                <div className="w-full md:w-[50%] mr-[10%] flex justify-center items-center">
                    <img src="https://www.paulthetall.com/wp-content/uploads/2022/08/A180724_Crowdfunding-illustratie.jpg" alt="Vector Image" className="w-[100%] h-[300px] rounded-[10px]" />
                </div>
            </div>
        </div>
    )
}

export default Overview;