import React from 'react'
import './About.css';
//import { Link } from 'react-router-dom';

function About() {
  return (



<div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container bottomContainer">
    <div class="ultimateImg">
      <img class="mainImg" style={{height:"550px",width:"570px"}} src="https://static.vecteezy.com/system/resources/previews/010/308/190/original/online-banking-cartoon-icon-illustration-business-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"></img>
      <div class="purpleBox">
        <p class="purpleText">
Check out our competitive rates and service charge for different types of loans. 
        </p>
        <img class="stars" src=""></img>
      </div>
    </div>
    <div class="allText bottomText">
      <p class="text-blk headingText">
        ABOUT US
      </p><br></br>
      <p class="text-blk subHeadingText">
      About Luna Bank of India 
      </p>
      <p class="text-blk description">
       

    Luna Bank is Mobile Banking application offered by Central Bank of India. Users can access most of the banking services anywhere any time through their mobile handsets. Pre login features are accessible to all without registration. Post login features can be accessed by customers of Central Bank of India after completing one time registration process.

    
     IOS user cannot install application other than the app store. We upload archive file which gets converted to ipa after upload to app store. Checksum of ipa and archive will never be same so checksum will not be applicable for iOS binary.


      </p>
      
    </div>
  </div>
</div>
)
}

export default About