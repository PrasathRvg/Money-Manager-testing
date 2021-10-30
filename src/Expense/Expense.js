import './expense.css';
import bus from '../assets/bus-solid-24.png'
import home from '../assets/home-solid-24.png'
import Expform from './Expform';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import {FaShoppingBag} from 'react-icons/fa';
import {FaHospitalAlt} from 'react-icons/fa';
import {FaCar} from 'react-icons/fa';
import {FaMobileAlt} from 'react-icons/fa';
import {FaPaw} from 'react-icons/fa';
import {FaApple} from 'react-icons/fa';
import {FaGripHorizontal} from 'react-icons/fa';
import { useState,useEffect } from 'react'
import axios from 'axios';
function Expense() {
  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}
  let history=useHistory();
  const [income , setIncome] = useState([])
    const valincome=([]);
    const userid=localStorage.getItem("userid");

    for(let i in income){
      if(income[i].type==="Expense" && income[i].userid===userid){
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
    <head>
      <meta charset="UTF-8"></meta>
      <title> Money Manager </title>
      <link rel="stylesheet" href="ex1.css"/>
      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet"/>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
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
                  <Link to="/"></Link>
                </div>
              </li>
              </li>
            </ul>
          </div>

      <section className="home-section">
        <div className="home-content">
          <i className='bx bx-menu'></i>
          <span className="text">EXPENSES</span>
        </div>
        
       
        <button type="button" onClick={() => history.push('/expform')} className="Exp_button">
          <span className="Exp_button__text" >ADD EXPENSE</span>
          <span className="Exp_button__icon">
            <i className='bx bx-message-square-add'></i>
          </span>
        </button>
      
   
            <div id="Exp_card1">
            <div id="Exp_expense">
                <div className="Exp_e2">
                    <h2>CATEGORY</h2>&nbsp;&nbsp;
                    <h2>ACCOUNT TYPE</h2>
                    <h2>AMOUNT</h2>
                </div><br/>
                {valincome.map((e)=>{return(
                <div className="Exp_e2">
                  <p>{e.category}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{e.accountType}</p>
                    <p>{e.amount}</p>
                </div>)})}
              </div></div>
              <div className="Exp_container">
                <div className="Exp_main">
                  <h2>Choose a category</h2>
                   <Link to='/expform'> <div className="Exp_sub">
                        <div className="Exp_icons"><FaUtensils className="Exp_bx"/><span>Hotel</span></div>
                        <div className="Exp_icons"><FaShoppingBag className="Exp_bx"/><span>Shopping</span></div>
                        <div className="Exp_icons"><FaHospitalAlt className="Exp_bx"/><span>Health</span></div>
                        <div className="Exp_icons"><FaCar className="Exp_bx"/><span>Vehicle </span></div>
                    </div>
                    <div className="Exp_sub">
                        <div className="Exp_icons"><FaMobileAlt className="Exp_bx"/><span>Recharges</span></div>
                        <div className="Exp_icons"><FaPaw className="Exp_bx"/><span>Pet care</span></div>
                        <div className="Exp_icons"><FaApple className="Exp_bx"/><span>Vegtables</span></div>
                        <div className="Exp_icons"><FaGripHorizontal className="Exp_bx"/><span>Others</span></div>
                    </div>
                    </Link>
                </div>
                </div>
                </section>
                </div>          
  
  );
}

export default Expense;
