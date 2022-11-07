import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function ContactForm() {
    return (
        <div>
            <div className="flex flex-col w-[100%] h-[95vh] justify-center items-center bg-blue-purple pt-[12.5vh] pb-[5vh] font-sans">
                <h1 className="text-[28px] font-semibold mb-[5px]"> Contact Us </h1>
                <p className="text-[18px] font-medium mb-[45px]"> Want to get in touch? Here's how you can reach us. </p>
                <div className="flex flex-row w-[100%]">
                    <div className="w-full md:w-[50%] bg-[#FFF] h-[400px] mr-[15px] ml-[5%] flex flex-col justify-center rounded-[5px]">
                        <h2 className="text-[24px] font-semibold mb-[15px] mx-[5%]"> Visit Team MetaFund  </h2>
                        <MapContainer center={[19.12, 72.83]} zoom={14} scrollWheelZoom={false} className="w-[90%] mx-[5%] h-[300px] z-0">
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                        </MapContainer>
                    </div>

                    <div className="w-full h-[400px] bg-[#FFF] md:w-[50%] ml-[15px] mr-[5%] pt-[25px] flex flex-col rounded-[5px]">
                        <h2 className="text-[24px] font-semibold mb-[25px] mx-[10%]"> Get in touch! </h2>
                        <input type='text' placeholder='Enter your name' className="mb-[30px] bg-[#FFF] text-[#111111] border-2 border-[#11111199] px-[10px] py-[5px] w-[80%] mx-[10%] rounded-[5px]" />
                        <input type='email' placeholder='Enter a valid email address' className="mb-[30px] bg-[#FFF] text-[#111111] border-2 border-[#11111199] px-[10px] py-[5px] w-[80%] mx-[10%] rounded-[5px]" />
                        <textarea placeholder="Enter your message" className="mb-[30px] bg-[#FFF] text-[#111111] border-2 border-[#11111199] px-[10px] py-[5px] w-[80%] mx-[10%] rounded-[5px] "></textarea>
                        <button className="w-[180px] bg-blue-purple py-[10px] px-[50px] rounded-[5px] mx-[10%]"> Submit </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;