import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


function DetailedCampaign({addCampaigns}) {
    const location = useLocation();
    const data = location.state.data;
    console.log(data);

    const[amt,setAmt]=useState('');
    const[a, setA] = useState(data.raised.$numberDecimal);


    const handleDonate = async () => {
        await addCampaigns(200, "0x6C2743a3AabDF98e2C404f84Ad1953d53f26bE0c", "Title", "Desc", "5")
        setA(Number(Number(a) + Number(amt)))
        alert('Amount Donated')
    //     console.log(data._id, amt)
    //     await axios.put('http://localhost:5000/updateCampaign', {
    //         value: amt,
    //         id: data._id
    //     })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.log('Error While Updating');
    //     });
    }

    return (
        <div className="flex ">
            <div className="bg-[#565656] h-[100vh] w-[100vw]">
                <Link className="flex justify-end items-center h-[7%] text-white mr-[10px]" to="/browse-campaigns">
                    <span className="material-symbols-outlined text-[30px] cursor-pointer"> close </span>
                </Link>
                <div className="flex flex-row justify-center items-center bg-white w-[100%] h-[93%] rounded-t-[30px]">
                    <div className="w-[40%] h-[100%] bg-blue-purple">
                        <div className='h-[300px] w-[90%] mx-auto my-[35px]'>
                            <img src="https://images.squarespace-cdn.com/content/v1/57220f5e555986178fe7d299/1559237277293-XTFNZ0DW3V968ET4CDMX/Current%2BTuirtion%2BCenter%2B1.jpg?format=1500w" alt="" className="w-full h-full" />
                        </div>
                        <h1 className='text-center text-[30px] font-semibold'> STATS </h1>
                        <div className="flex flex-row w-[90%] mx-[5%]">
                            <div className="flex flex-col w-[40%] mx-[2.5%] rounded-[5px] text-center">
                                <span className='py-[20px]'>
                                <span class="material-symbols-outlined text-[50px]"> paid </span>
                                </span>
                                <span className="text-[16px] pb-[15px]"> Indivdiual donors gave an estimated of 3.5 MAT to campaigns of this category </span>
                            </div>
                            <div className="flex flex-col w-[40%] mx-[2.5%] rounded-[5px] text-center">
                                <span className='py-[20px]'>
                                <span class="material-symbols-outlined text-[50px]"> query_stats </span>
                                </span>
                                <span className="text-[16px] pb-[15px]"> Donors are inspired to share campaigns on social medias that seems insporing to them </span>
                            </div>
                        </div>
                        <button className='bg-black text-white w-[90%] py-[8px] mt-[10px] ml-[5%] rounded-[5px]' onClick={() => alert('Link copied to clipboard')}> Share Campaigns </button>
                    </div>
                    <div className="w-[60%] h-[100%] bg-white py-[25px] px-[50px]">
                        <div className="flex items-center mb-[20px]">
                            <span className="block font-bold text-[30px]"> {data.title} </span>
                            <span className="bg-blue-purple text-black text-[18px] py-[4px] px-[30px] rounded-[5px] ml-[15px]"> {data.category} </span>
                        </div>

                        <span className="text-[16px] block">
                            Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
                        </span>

                        <span className="text-[18px] block mt-[25px]">
                            by <strong> {data.createdby} </strong> 
                        </span>

                        <div className="mt-[25px]">
                            <p className="text-[17px] mt-[10px]"> {a} MAT out of {data.goal.$numberDecimal} MAT raised </p>
                            <div className="h-[25px] w-[100%] bg-platinum mt-[5px] mb-[10px] rounded-[40px] shadow-1xl">
                            <div className="h-[100%] w-[10%] bg-blue-purple rounded-[40px] text-center">
                                <span className="p-[20px] font-bolder text-[#000000]"> {a / data.goal.$numberDecimal * 100}% </span>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mt-[25px]">
                            <div className="flex jusify-center text-[18px]">
                                <span className="material-symbols-outlined mr-[5px]"> schedule </span> <span> {data.deadline} Days Left For Deadline Completion </span>
                            </div>
                            <div className="flex jusify-center text-[18px]">
                                <span className="material-symbols-outlined mr-[5px]"> favorite </span> <span> {data.count} Supporters Contributed to this Campaign </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between mt-[25px]">
                            <h2 className='text-[20px]'> View and Verify Attached Document </h2>
                            <div className="flex jusify-center text-[18px]">
                                <a href="http://localhost:8082/ipfs/QmcvNskqCyCsdtbtbsFWMX4rxqRkTmENAxJqiW46yequqg" target="_blank" className='bg-blue-purple text-black w-[250px] py-[8px] mt-[10px] rounded-[5px] text-center'> View </a>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mt-[35px]">
                            <input type="text" className='border-0 border-black border-[1px] w-[55%] py-[8px] mt-[10px] px-[15px]' placeholder='Enter Amount To Be Donated (In MATIC)' onChange={e=>setAmt(e.target.value)}  />
                            <div className="flex jusify-center text-[18px] w-[40%]">
                                <button className='bg-blue-purple text-black w-[100%] py-[8px] mt-[10px] rounded-[5px] text-center' onClick={handleDonate}> Donate Now </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedCampaign;