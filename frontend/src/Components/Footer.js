import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <footer className="font-sans">
            <div className="bg-[#111111] text-center">
                <div className="p-4">
                    <div className="mb-4 flex justify-center">
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-mint-cream text-mint-cream">
                            <FacebookTwoToneIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-mint-cream text-mint-cream">
                            <TwitterIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-mint-cream text-mint-cream">
                            <InstagramIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-mint-cream text-mint-cream">
                            <YouTubeIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-mint-cream text-mint-cream">
                            <LinkedInIcon sx={{ fontSize: "30px" }} />
                        </div>
                    </div>
                    <section>
                        <form>
                            <div className='flex justify-center align-center'>
                                <div className="mx-[10px]">
                                    <p className="pt-2 text-mint-cream text-[18px]"> Sign up for our newsletter </p>
                                </div>
                                <div className="mx-[10px]">
                                    <input type='email' placeholder='Email address' className="mb-4 bg-[#111111] text-mint-cream border-2 border-mint-cream px-[10px] py-[5px] w-[450px] rounded-[5px]" />
                                </div>
                                <div className="mx-[10px]">
                                    <button type='button' className="mb-4 text-[#111111] bg-mint-cream border-2 border-mint-cream px-[20px] py-[5px] rounded-[5px] font-bold"> Subscribe </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section>
                        <div className="flex w-[75%] mx-[12.5%] text-mint-cream justify-between align-center flex-row mt-[20px]">
                            <div className='mb-4 mb-md-0 flex flex-col'>
                                <h5 className='text-[20px] font-bold mb-[10px]'> CAUSES </h5>

                                <ul className='list-unstyled mb-0 text-[16px]'>
                                    <li>
                                        <a href='#!' className='text-white'> Medical </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'> Education </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white'> Non-Profits </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white'> Startups </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mb-4 mb-md-0 flex flex-col'>
                                <h5 className="text-[20px] font-bold mb-[10px]"> ABOUT US </h5>

                                <ul className='list-unstyled mb-0 text-[16px]'>
                                    <li>
                                        <a href='#!' className='text-white'> What do we do </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'> Team MetaFund </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white'> In The News </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white'> Terms and Condition </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mb-4 mb-md-0 flex flex-col'>
                                <h5 className="text-[20px] font-bold mb-[10px]"> HOW IT WORKS? </h5>

                                <ul className='list-unstyled mb-0 text-[16px]'>
                                    <li>
                                        <a href='#!' className='text-white'> Connect Wallet </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'> How to Create Campaigns? </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white'> How to Fund Campaigns? </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white'> Fundraising Tips </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='mb-4 mb-md-0 flex flex-col'>
                                <h5 className="text-[20px] font-bold mb-[10px]"> SUPPORT </h5>

                                <ul className='list-unstyled mb-0 text-[16px]'>
                                    <li>
                                        <a href='#!' className='text-white'> Contact Us </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'> Trust and Safety </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white'> FAQs and Help Center </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white'> Reviews </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="bg-[#000000] py-[20px] flex justify-center items-center">
                <span className="text-mint-cream text-[18px]"> &copy; MetaFund 2022 | All Rights Reserved </span>
            </div>
        </footer>
    )
}

export default Footer;