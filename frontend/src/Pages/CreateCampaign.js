import React, { useState } from 'react';
import './FormBody.css';
import axios from 'axios';

function CreateCampaign({addCampaigns}) {

    const[CampName,setCampName]=useState('');
    const[CampDesc,setCampDesc]=useState('');
    const[CampCat,setCampCat]=useState('');
    const[FundAmt,setFundAmt]=useState('');
    const[FundDeadline,setFundDeadline]=useState('');
    const [error,setError]=useState(false);
    const handleSubmit=async (e)=>
    {
        e.preventDefault();
        if(CampName.length===0||FundAmt.length===0)
        {
            setError(true)
        }
        if(CampName && FundAmt)
        {
          console.log(CampName);
          console.log(FundAmt);
          let bodyFormData = new FormData();
          bodyFormData.append('title', CampName);
          bodyFormData.append('description', CampDesc);
          bodyFormData.append('goal', FundAmt);
          bodyFormData.append('deadline', FundDeadline);
          bodyFormData.append('category', CampCat);
          bodyFormData.append('createdby', "0x6C2743a3AabDF98e2C404f84Ad1953d53f26bE0c");
              await axios({
                method: "post",
                url: "http://localhost:5000/addStudent",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
              })
                .then(async res => {
                  console.log(res.data);
                  await addCampaigns(200, "0x6C2743a3AabDF98e2C404f84Ad1953d53f26bE0c", "Title", "Desc", "5")
                  if(res.data.message == 'success') {
                    window.location.href='http://localhost:3000/browse-campaigns'
                  }
                })
                .catch(error => {
                  console.log('Error while fetching!');
                })
        }
        else{
          alert("Fields shouldn't be empty");
        }
        
    }
    
  return (
    <>
    <div className='form-container'>
    <form className="createCpg card py-5 px-3" onSubmit={handleSubmit}>
    <label>Account Address:</label>     
    <input type="text" className='text' value="0x6C2743a3AabDF98e2C404f84Ad1953d53f26bE0c" disabled></input>
    <br/><br/>


    <label>Campagin name:</label>
    <input type="text" className='text'  onChange={e=>setCampName(e.target.value)} placeholder="What's the name of your campaign?"></input>
    {error && CampName.length<=0? <label>Can't be empty</label>:" "}
    <br/><br/>

    <label>Campagin description:</label>
    <input type="text" className='text'  onChange={e=>setCampDesc(e.target.value)} placeholder="Enter a short description of your campaign"></input>
    {error && CampName.length<=0? <label>Can't be empty</label>:" "}
    <br/><br/>


    <label>Campagin Category:</label>
    <select className='select' value={CampCat} onChange={e=>setCampCat(e.currentTarget.value)}>setCampCat
        <option value="Health">Health</option>
        <option value="Startup">Startup</option>
        <option value="NGO">NGO</option>
        <option value="Welfare">Welfare</option>
    </select>
    <br/><br/>


    <label>Funds Required:</label>
    <input type="text" className='text' onChange={e=>setFundAmt(e.target.value)} placeholder="How many funds will you require?"></input>
    {error && FundAmt.length<=0 ?<label>Can't be empty</label>:" "}
    <br/><br/>

    <label>Set deadline date</label>
    <input type="text" className='date' onChange={e=>setFundDeadline(e.target.value)}></input>
    <br/><br/>

    <label>Add Legal Documentation</label>
    <input type="file" className='file'></input>
    <br/><br/>

    <input type="submit" className='submit bg-blue-purple' value="Upload Campaign"/>
    </form>
    </div>
    </>
    
  )
}

export default CreateCampaign;