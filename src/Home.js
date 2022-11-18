import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
    
        <h>Hello User</h>
        <br></br>
        <b>------------</b>
        <br></br>
        <Link to="/Myform">Connect Wallet</Link>
    </div>
  );
}

export default Home