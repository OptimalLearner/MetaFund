import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import Myform from './Myform';
import WalletCard from './WalletCard';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/Myform" element={<Myform/>}/>
          <Route path="/WalletCard" element={<WalletCard/>}/>
       </Routes>
     </BrowserRouter>
    </div>

    
    
  );
  
}

export default App;
