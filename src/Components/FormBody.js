import React, { useState } from 'react'
import './FormBody.css';
function FormBody() {
    const[CampName,setCampName]=useState('');
    const[FundAmt,setFundAmt]=useState('');
    const [error,setError]=useState(false);
    const handleSubmit=(e)=>
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
        }
        else{
          alert("Fields shouldn't be empty");
        }
        
    }
    
  return (
    <>
    <div >
    <form className="createCpg" onSubmit={handleSubmit} class="card py-5 px-3">
    <label>Account Address:</label>     
    <input type="text" value="1x0000ff" disabled></input>
    <br></br><br></br><br></br>


    <label>Campagin name:</label>
    <input type="text" onChange={e=>setCampName(e.target.value)} placeholder="What's the name of your campaign?"></input>
    {error && CampName.length<=0? <label>Can't be empty</label>:" "}
    <br></br><br></br><br></br>


    <label>Campagin Category:</label>
    <select>
        <option>Health</option>
        <option>Startup</option>
        <option>NGO</option>
        <option>Welfare</option>
    </select>
    <br></br><br></br><br></br>


    <label>Funds Required:</label>
    <input type="text"  onChange={e=>setFundAmt(e.target.value)} placeholder="How many funds will you require?"></input>
    {error && FundAmt.length<=0 ?<label>Can't be empty</label>:" "}
    <br></br><br></br><br></br>

    <label>Set deadline date</label>
    <input type="date"></input>
    <br></br><br></br><br></br>

    <label>Add Legal Documentation</label>
    <input type="file"></input>
    <br></br><br></br><br></br>

    <input type="submit" value="Upload Campaign"/>
    </form>
    </div>
    </>
    
  )
}

export default FormBody