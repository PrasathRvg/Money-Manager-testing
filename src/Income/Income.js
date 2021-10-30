import React,{useEffect,useState} from 'react'
import './Style.css'
import { MdAttachMoney } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { BiBookAlt } from "react-icons/bi";
import { BiGift } from "react-icons/bi";
import { BiCoinStack } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiMessageSquareAdd} from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {useHistory} from 'react-router-dom'; 

function Income() {
  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}

    let history = useHistory();
    const [income , setIncome] = useState([])
    const valincome=([]);
    const userid=localStorage.getItem("userid");

    for(let i in income){
      if(income[i].type==="Income" && income[i].userid===userid){
        valincome.push(income[i]);
      }
      console.log(valincome)
    }
  useEffect(() => {
   incomedisplay()
  }, [])

  const incomedisplay =()=>{
    return axios.get('http://localhost:7081/getincome').then((res)=>{
       console.log(res.data)
       setIncome(res.data)
    })
  }

    return (
        <div>
          <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
          <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <section>
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
                  <i className='bx bx-log-out'onClick={()=>{logout()}}></i>
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
                  <Link to="/"></Link>
                </div>
              </li>
              </li>
            </ul>
          </div>
        

        <section className="home-section">
          <div className="home-content">
            <i className="bx bx-menu"></i>
            <span className="text">Income</span>
          </div>

          <div className="income_addbutton">
            <a href="/addincome" style={{ textDecoration: 'none' }}>
              <button onClick={() =>{
                  history.push("/addincome");
              }} type="button" className="income_button">
                <span className="income_button__text">Add Income</span>
                <span className="income_button__icon">
                  <BiMessageSquareAdd />
                </span>
              </button>
            </a>
          </div>

          <div className="income_container">
            <div className="income_main">
              <div className="income_sub">
                <div className="income_icons">
                  <MdAttachMoney className = "iconsreact"/>  
                  <span>Salary</span>
                </div>
                <div className="income_icons">
                  <BiMoney className = "iconsreact"/>  
                  <span>Bonus</span>
                </div>
                <div className="income_icons">
                  <MdBusinessCenter className = "iconsreact"/>
                  <span>Business</span>
                </div>
                <div className="income_icons">
                  <BiBookAlt className = "iconsreact"/>
                  <span>Pension</span>
                </div>
              </div>
              <div className="income_sub">
                <div className="income_icons">
                  <BiGift className = "iconsreact"/>
                  <span>Gift Cards</span>
                </div>
                <div className="income_icons">
                  <BiCoinStack className = "iconsreact"/>
                  <span>Extra Income</span>
                </div>
                <div className="income_icons">
                  <AiOutlineBank className = "iconsreact"/>
                  <span>Interest</span>
                </div>
                <div className="income_icons">
                  <BiDotsHorizontalRounded className = "iconsreact"/>
                  <span>Others</span>
                </div>
              </div>
            </div>
            <h3 className="income_h3">Recent Income</h3>
            <div className="income_tables">
              <div className="income_Table">
                <div className="income_Heading">
                  <div className="income_Cell">
                    <p>Category</p>
                  </div>
                  <div className="income_Cell">
                    <p>Date</p>
                  </div>
                  <div className="income_Cell">
                    <p>Amount</p>
                  </div>
                  <div className="income_Cell">
                    <p>Acount Type</p>
                  </div>
                </div>
                {valincome.map((e)=>{return(
                   <div className="income_Row">
                   <div className="income_Cell">
                     <p>{e.category}</p>
                   </div>
                   <div className="income_Cell">
                     <p>{e.date}</p>
                   </div>
                   <div className="income_Cell">
                     <p>₹{e.amount}</p>
                   </div>
                   <div className="income_Cell">
                     <p>{e.accountType}</p>
                   </div>
                 </div>
                )})}
              </div>
            </div>
          </div>
        </section>
        </section>
        <script src="Script.js"></script>
        </div>
   );
}

export default Income
