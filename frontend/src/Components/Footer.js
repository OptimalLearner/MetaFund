import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <footer className="font-sans">
            <div className="bg-black text-center">
                <div className="p-4">
                    <div className="mb-4 flex justify-center">
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-white text-white cursor-pointer hover:border-blue-purple hover:bg-blue-purple hover:text-black">
                            <FacebookTwoToneIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-white text-white cursor-pointer hover:border-blue-purple hover:bg-blue-purple hover:text-black">
                            <TwitterIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-white text-white cursor-pointer hover:border-blue-purple hover:bg-blue-purple hover:text-black">
                            <InstagramIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-white text-white cursor-pointer hover:border-blue-purple hover:bg-blue-purple hover:text-black">
                            <YouTubeIcon sx={{ fontSize: "30px" }} />
                        </div>
                        <div className="m-5 p-[10px] rounded-[50%] border-2 border-white text-white cursor-pointer hover:border-blue-purple hover:bg-blue-purple hover:text-black">
                            <LinkedInIcon sx={{ fontSize: "30px" }} />
                        </div>
                    </div>
                    <section>
                        <form>
                            <div className='flex justify-center align-center'>
                                <div className="mx-[10px]">
                                    <p className="pt-2 text-white text-[18px]"> Sign up for our newsletter </p>
                                </div>
                                <div className="mx-[10px]">
                                    <input type='email' placeholder='Email address' className="mb-4 bg-black text-white border-2 border-white px-[10px] py-[5px] w-[450px] rounded-[5px]" />
                                </div>
                                <div className="mx-[10px]">
                                    <button type='button' className="mb-4 text-black bg-white border-2 border-white px-[20px] py-[5px] rounded-[5px] font-bold hover:border-blue-purple hover:bg-blue-purple"> Subscribe </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section>
                        <div className="flex w-[75%] mx-[12.5%] text-white justify-between align-center flex-row mt-[20px]">
                            <div className='mb-4 mb-md-0 flex flex-col'>
                                <h5 className='text-[20px] font-bold mb-[10px]'> CAUSES </h5>

                                <ul className='list-unstyled mb-0 text-[16px]'>
                                    <li>
                                        <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Medical </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Education </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Non-Profits </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Startups </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mb-4 mb-md-0 flex flex-col'>
                                <h5 className="text-[20px] font-bold mb-[10px]"> ABOUT US </h5>

                                <ul className='list-unstyled mb-0 text-[16px]'>
                                    <li>
                                        <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> What do we do </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Team MetaFund </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> In The News </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Terms and Condition </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mb-4 mb-md-0 flex flex-col'>
                                <h5 className="text-[20px] font-bold mb-[10px]"> HOW IT WORKS? </h5>

                                <ul className='list-unstyled mb-0 text-[16px]'>
                                    <li>
                                        <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Connect Wallet </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> How to Create Campaigns? </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> How to Fund Campaigns? </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Fundraising Tips </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='mb-4 mb-md-0 flex flex-col'>
                                <h5 className="text-[20px] font-bold mb-[10px]"> SUPPORT </h5>

                                <ul className='list-unstyled mb-0 text-[16px]'>
                                    <li>
                                        <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Contact Us </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Trust and Safety </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> FAQs and Help Center </a>
                                    </li>
                                    <li>
                                    <a href='#!' className='text-white hover:text-blue-purple hover:font-medium'> Reviews </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="bg-[#000000] py-[20px] flex justify-center items-center">
                <span className="text-white text-[18px]"> &copy; MetaFund 2022 | All Rights Reserved </span>
            </div>
        </footer>
    )
}

export default Footer;