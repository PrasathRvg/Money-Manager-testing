import React from 'react'
import './Updateforms.css';
import {Link,useHistory} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Updateforms(props) {
    const logout=()=>{
        localStorage.clear()
        window.location.reload(true);}

    const history = useHistory();
    const userid=localStorage.getItem("userid");

    console.log("props",props);
    const {location:{state}}=props;
    console.log("state",state);
    const[updateCategory,setCategory]=useState(state.category)
    const[updateaccountType,setaaountType]=useState(state.accountType)
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



 
//  const validate = (e) => {

//    e.preventDefault()
//    if(category===""|| amount==="" || accountType==="" ||date===""){
//     if(category === ""){
//       setErrorCt("*SELECT THE CATEGORY")
//     }
//     else{
//       setErrorCt("")
//     }
 
//     if (amount === "") {
 
//         setErrorAmt("*ENTER THE AMOUNT")
 
//     }
//     else {
//         setErrorAmt("")
//     }
//     if (accountType === ""){
//       setErroracct("*ENTER THE ACCOUNT TYPE")
//     }
//     else{
//       setErroracct("")
//     }
//     if (date === "") {
//       setErrordt("*ENTER THE START DATE")
//     }
//     else {
//       setErrordt("")
//     }
//    }
// else{
//   FormValidation()
// }}
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
          <span className="text">NEW EXPENSES</span>
        </div>
            <button  id="Exp_back" type="submit" value="back" onClick={() => history.push('/trans')}>Back</button>
          
                 <div className="Exp_card3">
                  <div id="Exp_heading">UPDATE EXPENSE</div>
                  <div className="Exp_form">
                      <div className="Exp_felements">
                      <label>Category</label>
                          <select className="Exp_input" value={updateCategory} onChange={(e)=>{setCategory(e.target.value)}}>
                            <option value=""  selected>Select Category</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Health">Health</option>
                            <option value="Pet care" >Pet care</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Transport">Transport</option>
                            <option value="Recharges">Recharges</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className="Exp_felements">
                        <label>Amout</label>
                        <input type="text" className="Exp_input" value={updateamount} onChange={(e)=>setamount(e.target.value)}/>
                    </div> 
  
                      <div className="Exp_felements">
                      <label>Account Type</label>
                          <div className="Exp_radio" value={updateaccountType} >
                              <input type="radio" name="option" id="Exp_bank" value="bank"  checked={updateaccountType==="bank"} onChange={(e)=>{setaaountType(e.target.value)
                            }}/>
                              <label for="bank"> Bank</label> 
                              <input type="radio" name="option" id="Exp_wallet"  value="wallet" checked={updateaccountType==="wallet"} onChange={(e)=>{setaaountType(e.target.value)
                           }}/>
                              <label for="wallet"> Wallet</label>
                          </div>
                      </div>                    
                      <div className="Exp_felements">
                          <label>Date</label>
                          <input type="date" className="Exp_input" value={updatedate} onChange={(e)=>{setdate(e.target.value)}}/>
                      </div> 
                      <div className="Exp_felements">
                       
                          <button type="submit" className="Exp_btn" onClick={()=>{updateTask()
                        setCategory('')
                        setaaountType('')
                        setamount('')
                        setdate('')}}>SAVE</button>
                     <button type="submit" className="Exp_btn" onClick={()=>{history.push("/trans")}}>CANCEL</button>
                      </div>
                      </div>
                      </div>
            </section>
        </div>
    )
}

export default Updateforms
