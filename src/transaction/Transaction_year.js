import React from 'react'
import './Transaction.css';
import {Link} from 'react-router-dom'

function Transaction_year() {
    return (
        <div>
             <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
    <div className="sidebar close">
            <div className="logo-details">
              <i className='bx bxl-bitcoin'></i>
              <span className="logo_name">Money Manager</span>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/dashbord">
                  <i className='bx bxs-dashboard'></i>
                  <span className="link_name">Dashboard</span>
                  </Link>
                <ul className="sub-menu blank">
                  <li><a className="link_name" href="#">Dashboard</a></li>
                </ul>
              </li>
              <li>
              <Link to="/income">
                  <i className='bx bx-italic'></i>
                  <span className="link_name">Income</span>
                </Link>
                <ul className="sub-menu blank">
                  <li><a className="link_name" href="#">Income</a></li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                 <Link to="/expense">
                    <i className='bx bxs-data'></i>
                    <span className="link_name">Expenses</span>
                  </Link>
                </div>
                <ul className="sub-menu">
                  <li><a className="link_name" href="#">Expenses</a></li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                <Link to="/month">
                    <i className='bx bxs-component'></i>
                    <span className="link_name">Budget</span>
                </Link>
                </div>
                <ul className="sub-menu">
                  <li><a className="link_name" href="#">Budget</a></li>
                </ul>
              </li>
              <li>
                <Link to="/transaction">
                  <i className='bx bx-transfer-alt'></i>
                  <span className="link_name">Transactions</span>
                </Link>
                <ul className="sub-menu blank">
                  <li><a className="link_name" href="#">Transactions</a></li>
                </ul>
              </li>
              <li>
              <Link to="/account">
                  <i className='bx bx-rupee'></i>
                  <span className="link_name">Account</span>
              </Link>
                <ul className="sub-menu blank">
                  <li><a className="link_name" href="#">Account</a></li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                <Link to="/chart">
                    <i className='bx bxs-doughnut-chart'></i>
                    <span className="link_name">Chart</span>
                </Link>
                </div>
                <ul className="sub-menu">
                  <li><a className="link_name" href="#">Chart</a></li>
                </ul>
              </li>
              <li>
              <Link to="/help">
                  <i className='bx bxs-help-circle'></i>
                  <span className="link_name">Help</span>
              </Link>
                <ul className="sub-menu blank">
                  <li><a className="link_name" href="#">Help</a></li>
                </ul>
              </li>
              <li>
              <li>
                <div className="profile-details">
                  <div className="profile-content">
                    <i className='bx bxs-user-circle'></i>
                  </div>
                  <div className="name-job">
                    <div className="profile_name">Username</div>
                    <div className="job">programmer</div>
                  </div>
                  <Link to="/"></Link>
                </div>
              </li>
              </li>
            </ul>
          </div>
            <section class="home-section">
    <div class="home-content">
      <i class='bx bx-menu'></i>
      <span class="text">Transaction</span>
    </div>
        <section>
                <div class="topbuttons">
                <Link to ="/transaction" className="we">Weekly</Link>
                    <Link to="/trans" className="mo">Monthly</Link>
                   <Link to="/transac" className="ye">Yearly</Link>
                </div>
                <h1 class="headings"><button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>&nbsp;&nbsp;<i>31/07/2021 &nbsp;<button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>&nbsp;&nbsp;</i></h1>
                <div class="card">
                <div class="cc" id="scrollable1">
                <ul class="itmsmonth">
                  <div class="category">
                      <p class="category12">Month</p>
                      </div>
                  <div class="price">
                      <p class="category12">Income</p>
                    </div>
                    <div class="price">
                      <p class="category12">Expenses</p>
                    </div>
              </ul>
              <ul class="itmsmonth">
                <div class="category">
                    <p class="category123">July</p>
                    </div>
                <div class="price">
                    <p class="category11">₹ 20000</p>
                  </div>
                  <div class="price">
                    <p class="category21">₹ 13000</p>
                  </div>
            </ul>
            <ul class="itmsmonth">
              <div class="category">
                  <p class="category123">June</p>
                  </div>
              <div class="price">
                  <p class="category11">₹ 23000</p>
                </div>
                <div class="price">
                  <p class="category21">₹ 14690</p>
                </div>
          </ul>
          <ul class="itmsmonth">
            <div class="category">
                <p class="category123">May</p>
                </div>
            <div class="price">
                <p class="category11">₹ 25000</p>
              </div>
              <div class="price">
                <p class="category21">₹ 16900</p>
              </div>
        </ul>
        <ul class="itmsmonth">
          <div class="category">
              <p class="category123">May</p>
              </div>
          <div class="price">
              <p class="category11">₹ 25000</p>
            </div>
            <div class="price">
              <p class="category21">₹ 16900</p>
            </div>
      </ul>
              </div>
              </div>
          <div class="payy"> <button class="bt" id="ex31" >Export as Excel</button>
           <button class="bt" id="ex32" >Export as PDF</button></div>
                </section>
                </section>
        </div>
    )
}

export default Transaction_year
