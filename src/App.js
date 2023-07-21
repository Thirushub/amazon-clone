// import logo from './logo.svg';
import React from 'react';
import './App.css';
import logow from './logow.png'
import search from './search.svg'
import ind from './ind.svg'
import mainimg1 from './slide1.jpg'
import mainimg2 from './slide2.jpg'
import mainimg3 from './slide0.jpg'
import subnav from './subimg.jpg'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap';
import c1 from './c1.jpg'
import c11 from './c11.jpg'
import c111 from './c111.jpg'
import c1111 from './c1111.jpg'
// import 'bootstrap/dist/js/bootstrap.min.js';
import L1 from './L1.jpg';
import L2 from './L2.jpg';
import L31 from './L3.1.jpg';
import L32 from './L3.2.jpg';
import L33 from './L3.3.jpg';
import L34 from './L3.4.jpg';
import L4 from './L4.jpg';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import s3 from './s3.jpg'
import s4 from './s4.jpg'
import s5 from './s5.jpg'
import s6 from './s6.jpg'
import s7 from './s7.jpg'
import s8 from './s8.jpg'
import s9 from './s9.jpg'
import s10 from './s10.jpg'
import s11 from './s11.jpg'
import s12 from './s12.jpg'
import s13 from './s13.jpg'
import s14 from './s14.jpg'
import s15 from './s15.jpg'
import s16 from './s16.jpg'
import s17 from './s17.jpg'










function App() {
  return (
    <header>
    <body>
      <div className='bgcolor'>
        <div className='maindiv'>
          <div className='subdiv'>
            <div className='divimg'>
              <img src={logow} className='logoimg' /></div><div className='address'>
              <label>Hello</label><br /><label>Select Your address</label>
            </div>
            <div class="search-start">
              <select className='selector'>
                <option value="">All</option>
                <option value="">Home&Kitchen</option>
                <option value="">Appliance</option>
                <option value="">Amazon Games</option>
              </select>
              <input type="text" class="search-input" placeholder="Search Amazon.in" />
              <button class="search-button"><img src={search} className='searchimg' /></button>
            </div>
            <div className="drp-dwn">
              <select className='nodrp'>
                <option value=""><img src={ind} alt='ind'/><label>En</label></option>
                <option value="">Tamil</option>
                <option value="">Hindi</option>
              </select>
            </div>
            <div>
              <label>Hello,Signin</label><br />
              <label><b>Account&list</b></label>
            </div>
            <div>
              <label>Returns</label><br />
              <label><b>&Orders</b></label>
            </div>
            <div>
              <label>Cart</label>
            </div>
          </div>
        </div><div className='seconddiv'>
          <div>
            <label>All</label>
          </div>
          <div>
            <label> Amazon miniTV</label>
          </div>
          <div>
            <label>Sell</label>
          </div>
          <div>
            <label>Best Sellers</label>
          </div>
          <div>
            <label>Mobiles</label>
          </div>
          <div>
            <label>Today's Deals</label>
          </div>
          <div>
            <div className='subnavimg'><img src={subnav} /></div>
          </div>
        </div>
        <div >

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100 " src={mainimg1} alt="First slide" />
            </div>
            <div class="carousel-item ">
              <img class="d-block w-100" src={mainimg2} alt="Second slide" />
            </div>
            <div class="carousel-item ">
              <img class="d-block w-100" src={mainimg3} alt="Third slide" />
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
          </div>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            {/* <a class="carousel-control-next" src={mainimg3} role="button" data-slide="next"> */}

            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

<div className='flexing'>

      <div className='column1'><br/><div className='Lp1'><h4 className='h4tag'>Bluetooth Calling Smartwatch starts at..</h4>
      <div><img src={L1} alt='leftside1' className='Lsubpartimg1'/></div></div><br/><a href='' className='atag'>Shop now</a>
        </div>

        <div className='column2'><br/><div className='Lp2'><h4 className='h4tag'>Prime Day is July 15th and 16th</h4></div>
          <div><img src={L2} alt='leftside2' className='Lsubpartimg1' /></div>
          </div>

          <div className='column3'><br/><div className='Lp3'><h4 className='h4tag'>Appliances for your home | Up to 55% off</h4> </div>
            <div className='Lsubpart-11'>
              <div><img src={L31} alt='leftside3.1' className='Lsubpartimg' /><br/><p className='ptag'>Air conditioner</p></div>
              <div><img src={L32} alt='leftside3.2' className='Lsubpartimg' /><p className='ptag'>Refridgetor</p></div>
            </div><br />
            <div className='Lsubpart-12'>
              <div><img src={L33} alt='leftside3.3' className='Lsubpartimg' /><p className='ptag'>Micro waves</p></div>
              <div><img src={L34} alt='leftside3.4' className='Lsubpartimg' /><p className='ptag'>Washing machine</p></div>
            </div>
            </div>
         
          <div className='column4'><div className='Lp41'>
            <div className='L4Sin'><br/><h4 className='h4tag'>Sign in for your best experience</h4><button type='signin' className='Sin'>Sign in securely</button></div><br />
            <div className='Lp4'><div><img src={L4} alt='leftside4' /></div></div>
          </div>
          </div>
          </div>
          <div  className='flexing1'>
          <div className='column1'><br/><div className='Lp1'><h4 className='h4tag'>Bluetooth Calling Smartwatch starts at..</h4>
      <div><img src={L1} alt='leftside1' className='Lsubpartimg1'/></div></div><br/><a href='' className='atag'>Shop now</a>
        </div>

        <div className='column2'><br/><div className='Lp2'><h4 className='h4tag'>Prime Day is July 15th and 16th</h4></div>
          <div><img src={L2} alt='leftside2' className='Lsubpartimg1' /></div>
          </div>
          <div className='column1'><br/><div className='Lp1'><h4 className='h4tag'>Bluetooth Calling Smartwatch starts at..</h4>
      <div><img src={L1} alt='leftside1' className='Lsubpartimg1'/></div></div><br/><a href='' className='atag'>Shop now</a>
        </div>

        <div className='column2'><br/><div className='Lp2'><h4 className='h4tag'>Prime Day is July 15th and 16th</h4></div>
          <div><img src={L2} alt='leftside2' className='Lsubpartimg1' /></div>
          </div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
        <div>Offer</div>
        <div className='slidingimg'>
          <div><img src={s1} alt='s1img'/></div>
          <div><img src={s2} alt='s1img'/></div>
          <div><img src={s3} alt='s1img'/></div>
          <div><img src={s4} alt='s1img'/></div>
          <div><img src={s5} alt='s1img'/></div>
          <div><img src={s6} alt='s1img'/></div>
          <div><img src={s7} alt='s1img'/></div>
          <div><img src={s8} alt='s1img'/></div>
          <div><img src={s9} alt='s1img'/></div>
          <div><img src={s10} alt='s1img'/></div>
          <div><img src={s11} alt='s1img'/></div>
          <div><img src={s12} alt='s1img'/></div>
          <div><img src={s13} alt='s1img'/></div>
          <div><img src={s14} alt='s1img'/></div>
          <div><img src={s15} alt='s1img'/></div>
          <div><img src={s16} alt='s1img'/></div>
          <div><img src={s17} alt='s1img'/></div>
          
          </div>   

        </div>
         
    </body>
    <footer>
      <header className='backtotop'>Back to top</header>
      <div className='footerflexing'>
        <div><br/><br/>
          <h6>Get to Know Us</h6>
          <p>About us</p>
          <p>Careers</p>
          <p>Press Release</p>
          <p>Amazon Science</p>
        </div>
        <div><br/><br/>
          <h6>Connect with Us</h6>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div><br/><br/>
        <h6>Make Money With</h6>
        <p>Sell on Amazon</p>
        <p>Sell under Amazon Accelerator</p>
        <p>Protect and Build Your Brand</p>
        <p>Amazon Global Seling</p>
        <p>Become an affiliate</p>
        <p>Fufilment by Amazon</p>
        <p>Advertise Your Products</p>
        <p>Amazon Pay on Merchants</p>
        </div>
        <div><br/><br/>
          <h6>Let Us Help You </h6>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
        
</div>
    </footer>
    </header>
  );
}

export default App;


