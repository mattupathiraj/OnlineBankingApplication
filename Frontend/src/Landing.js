import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
  return (
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles.css" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>

<body>
  <header class="header">
  <div class="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Vdd-VpHyFzhAmYv2wT5E7V-Ki_O_ejwZFg&usqp=CAU" alt="easyclass" />
                <h4><left>The Luna Bank Of India</left>    </h4>
              </div>
    
    <nav class="nav-items">
      <a href="#">Home</a>
      <Link to="/About"><a href="#">About Us</a></Link>
      <Link to="/Contact"><a href="#">Contact Us</a></Link>
      <Link to="/sign"><a href="#">Logout</a></Link>
      <Link to="/login"><a href="#">Sign Up</a></Link>
      <Link to="/feed"><a href="#">Feed Back</a></Link>
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1></h1>
      <p>The Luna Bank Of India</p>
      <button>Learn More</button>
    </div>
    <div class="achievements">
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://www.bobworld.com/-/media/project/bob/bobworld/svg/credit-score-icon.svg" alt="easyclass" />
        <p class="work-heading">Profile</p>
        <p class="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
      </div>
      <div class="work">
            <img style={{height:"100px",width:"110px"}} src="https://www.bobworld.com/-/media/project/bob/bobworld/svg/offers-updated.svg" alt="easyclass" />
        <p class="work-heading">Branches</p>
        <p class="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
      </div>
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://www.bobworld.com/-/media/project/bob/bobworld/svg/account-aggregator-updated.svg" alt="easyclass" />
        <p class="work-heading">Invest</p>
        <p class="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
      </div>
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/home/bcloan.svg?iar=0&hash=05823B2B2F9045B4775CCDCA46E6EA10" alt="easyclass" />
        <p class="work-heading">Loans</p>
        <p class="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
      </div>
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/home/beloan.svg?iar=0&hash=6CA7E15EEC66AEE8D660120E12B60FA7" alt="easyclass" />
        <p class="work-heading">Insurance</p>
        <p class="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
      </div>
    </div>
    <div class="about-me">
      <div class="about-me-text">
      <h2>Accounts</h2><br></br>
      <img style={{height:"100px",width:"110px"}} src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/icons/bankofbaroda-accounts.svg?iar=0&hash=CCDC658A25A755B48D4E83E495834947" alt="easyclass" /><br></br>

        <p>The Luna Bank Of India offers different type of accounts to meet your financial goals and secure your future. Choose from our wide range of deposit products that are specifically designed to keep your unique requirements in mind.</p>
      </div>
      <img src="https://img.freepik.com/premium-vector/epayment-process-concept-with-people-scene-flat-cartoon-design-woman-transfers-money-man-credit-card-using-online-banking-mobile-application-vector-illustration-visual-story-web_9209-9361.jpg" alt="me"></img>
    </div>
  </main>
  <footer class="footer">
    <div class="copy">© The Luna Bank of India</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">FAQ</a>
        <Link to='Contact'><a href="#">Contact Information</a></Link>
      </div>
      <div class="links">
        <span>Social Links</span>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</body>
</html>
  
)
}

export default Landing