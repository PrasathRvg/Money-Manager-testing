import React from 'react'
import './Home.css';
import {useHistory} from 'react-router-dom'; 
import { FaCoins } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import img1 from '../assets/5a902db97f96951c82922874.png';
import micro from '../assets/5a902db47f96951c82922873.png';
import goo from '../assets/goo.png';
import foot from '../assets/footer.png';

function Home(props){
  let history= useHistory();
    return (
        <div className="body">
            <nav>
             <label className="logo">MoneyManager</label>
                 <button className="btnss" onClick={()=>{
                   history.push("/register");
                 }}>SIGN UP</button>
                 <button className="btnss" onClick={()=>{
                   history.push("/login");
                 }}> sign IN</button>
            </nav>
                    <section>
                      <div id="id1">Experience a fresh way <br/>to
                        manage money</div>
                      <div className="text">
                        <div id="id2">Reach your goals with personalized insights,
                          <br/> custom budgets, spend tracking,<br/> and subscription
                          monitoring—all for free.
                    
                        </div>
                    
                      </div>
                      <div id="id3Button">
                        <button className="buttonss" onClick={()=>{
                          history.push("/register");
                        }}>Register with us</button>
                      </div>
                      <div className="img">
                        <a href="https://play.google.com/store/apps"><img src={micro}/></a>
                        <a href="https://www.microsoft.com/en-in/store/apps/windows"><img src={goo}/></a>
                        <a href="https://www.apple.com/in/app-store/"><img src={img1} id="d1"/></a>
                      </div>
                      <div className="services">
                        <h1>FEATURES</h1>
                        <div className="cen">
                          <div className="service">
                            <FaChartBar size="50px"/>
                            <h2>Improved Charts</h2>
                            <p>Review Your Expenses With Improved And Well Organised Charts</p>
                          </div>
                    
                          <div className="service">
                            <FaCoins size="50px"/>
                            <h2>Advanced Budget Feature</h2>
                            <p>Set A Monthly Budget For Each Category and easily add and update your categories.</p>
                          </div>
                    
                          <div className="service">
                            <FaWallet size="50px"/>
                            <h2>Track Your Spending</h2>
                            <p>Stay on top of your finances by seeing where your money comes and goes</p>
                          </div>
                        </div>
                      </div>
                    </section>
        <section id="footers">
            <footer className="footers">
                <div className="footer1">
                  <div className="row">
                    <div className="footers-col">
                      <h4>Explore</h4>
                      <ul className="uls">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Us</a></li>
                      </ul>
                    </div>
                    <div className="footers-col">
                      <h4>Get Started</h4>
                      <ul className="uls">
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Log In</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy</a></li>
                      </ul>
                    </div>
                    <div className="footers-col">
                      <h4>Get Help</h4>
                      <ul className="uls">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">Send Feedback</a></li>
                        <li><a href="#"></a></li>
                      </ul>
                    </div>
                    <div className="footers-col">
                      <h4>follow us</h4>
                      <div className="social-links">
                        <a id ="fb" href="#"><FaFacebook size="30px"/></a>
                        <a id ="ig" href="#"><FaInstagram size="30px" /></a>
                        <a id ="tw" href="#"><FaTwitter size="30px"/></a>
                      </div>
                    </div>
                    <div className="footers-col">
                      <img src={foot} alt="Help Img"/>
                    </div>
                  </div>
                </div>
             </footer>
            </section>
            <script src="side.js"></script>
        </div>
    )
}

export default Home
