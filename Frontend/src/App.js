
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Login from './Login';
 import Sign from './Sign';
import Home from './Home'
 import Contact from './Contact'
import About from './About'
 import Landing from './Landing'
 import Newaccount from './Newaccount'
 import Review from './Review'
 //import Faq from'./Faq'







 
import { Domain } from '@mui/icons-material';
import Feedback from './Feedback';
function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Landing/>}></Route>
 <Route path="/sign" element={<Sign/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
<Route path="/About" element={<About/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>
<Route path="/home" element={<Home/>}></Route>
<Route path="/review" element={<Review/>}></Route>
<Route path="/feed" element ={<Feedback/>}></Route>
<Route path="/openacc" element={<Newaccount/>}></Route>

 </Routes>
</BrowserRouter>



//<div><SecureMessaging/></div>
// <div><Review/></div>
//<div><Landing/></div>

);
}

export default App;
