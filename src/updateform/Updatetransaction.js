import React,{ useEffect, useState } from 'react'
import './Updatetransaction.css';
import {useHistory} from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

function Updatetransaction(props) {
    const logout=()=>{
        localStorage.clear()
        window.location.reload(true);}
    let history = useHistory();
    console.log("props",props);
    const {location:{state}}=props;
    console.log("state",state);
    const userid=localStorage.getItem("userid");

    const[updateCategory,setCategory]=useState(state.category)
    const[updateaccountType,setaccountType]=useState(state.accountType)
    const[updateamount,setamount]=useState(state.amount)
    const[updatedate,setdate]=useState(state.date)
    const[utype,setType]=useState(state.type)
    
    const updateTask =()=>{
        axios.put('/updatetransaction',{
            _id:state._id,
            category: updateCategory,
        amount: updateamount,
        accountType: updateaccountType,
        date: updatedate,
        userid:userid
        }).then((res)=>{
            console.log(res.data);
            history.push('/trans');
            
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
                   <span className="text">New Income</span>
               </div>
               <div className="income_back">
               <a href="#" style={{textDecoration: "none"}}>
                 <button onClick={() =>{
                       history.push('/trans');
                   }} type="button" className="income_backbutton">Back</button>
               </a>
               </div>
               <div className="income_add-form">
                 <div className="income_title">UPDATE INCOME</div>
                 <div className="income_form">
                     <div className="income_inputfield">
                     <label>Category</label>
                    <select className="income_tab" value={updateCategory} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value="" disabled>Select Category</option>
                        <option value="Salary">Salary</option>
                        <option value="Business">Business</option>
                        <option value="Gift">Gift</option>
                        <option value="Bonus">Bonus</option>
                        <option value="Pension">Pension</option>
                        <option value="Others">Others</option>
                    </select>
                     </div>
     
                     <div className="income_inputfield">
                         <label>Amount:</label>
                         <input className="income_tab" type="number" placeholder="Enter the Amount" value={updateamount} onChange={(e)=>{setamount(e.target.value)}}/>
                     </div>
     
                     <div className="income_inputfield">
                         <label className= "income_la">Account Type</label>
                         <div className="income_radio">
                             
                             <input type="radio" name="option" id="bank" value="bank" onChange={(e)=>{setaccountType(e.target.value)}}/>
                             <label for="bank"> Bank</label>
                                             
                             <input type="radio" name="option" id="wallet"  value="wallet"  onChange={(e)=>{setaccountType(e.target.value)}}/>
                             <label for="wallet"> Wallet</label>
                          
                         </div>
                     </div>
     
                     <div className="income_inputfield">
                         <label>Date:</label>
                         <input className="income_tab" type="date" value={updatedate} onChange={(e)=>{setdate(e.target.value)}}/>
                     </div>
                     <div className="income_savebutton">
                         <button type="submit" onClick={()=>{updateTask()
                        setCategory('')
                        setaccountType('')
                        setamount('')
                        setdate('')}}>Save</button>&nbsp;&nbsp;
                         <button type="submit" onClick={()=>{history.push('/trans')}}>Cancel</button>
                     </div>
     
                 </div>
               </div>
           </section>
           
          
     </section>
    <script src="Script.js"></script>
        </div>
    )
}

export default Updatetransaction
