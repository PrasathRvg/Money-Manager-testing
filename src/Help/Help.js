import React from 'react'
import { Link} from 'react-router-dom';
import './HelpStyle.css';

function Help() {
  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}
    return (
        <div>
<html lang="en" dir="ltr">

<head>
  <meta charset="UTF-8"/>
  <link rel="stylesheet" href="MMM2.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
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
              <Link to="/trans">
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
              <Link to="/">
                  <i className='bx bx-log-out' onClick={()=>{logout()}}></i>
                  <span className="link_name">Logout</span>
              </Link>
                <ul className="sub-menu blank">
                  <li><a className="link_name" href="#">Logout</a></li>
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
                  <Link to="/Home"></Link>
                </div>
              </li>
              </li>
            </ul>
          </div>

  {/* <!-- Home-Section --> */}

  <section class="home-section">
    <div class="home-content">
      <i class='bx bx-menu'></i>
      <span class="text">Help</span>
    </div>
    
    <div class="container">
        <div class="help-content">
            <div class="left-side">
                <div class="phone details">
                    <i class="fas fa-phone-alt"></i>
                    <div class="topic">Phone</div>
                    <div class="text-one">+91 800 8000 800</div>
                    <div class="text-two">+91 900 9000 900</div>
                </div>
                <div class="email details">
                    <i class="fas fa-envelope"></i>
                    <div class="topic">Email</div>
                    <a href="#"><div class="text-one">help.moneymngr@gmail.com</div></a>
                    <a href="#"><div class="text-two">info.moneymngr@gmail.com</div></a>
                </div>
            </div>
            <section class="help">
                
                <div class="help-1">
                    <h2>FAQs</h2>
                    <div class="help-row">
                        <div class="help-footer-col">
                            <h4>General Guides</h4>
                            <ul>
                                <li><a href="#">Protected data</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">Debts and Credits</a></li>
                                <li><a href="#">Troubleshoot</a></li>
                            </ul>
                        </div>
                        <div class="help-footer-col">
                            <h4>Bank Sync</h4>
                            <ul>
                                <li><a href="#">connect a new account</a></li>
                                <li><a href="#">Account data cancellation</a></li>
                                <li><a href="#">Credit cards guide</a></li>
                                <li><a href="#">Bank sync - Troubleshoot</a></li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </section>
      </div>
    </div>


  </section>
  <script src="scriptm.js"></script>
</body>

</html>
        </div>
    )
}

export default Help
