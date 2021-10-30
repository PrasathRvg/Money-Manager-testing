import React from 'react'
import './expense.css';
import {Link} from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'

import {useHistory} from 'react-router-dom';
function Expform() {
  let history=useHistory();
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [accountType, setaccountType] = useState("")
  const [date, setdate] = useState("")
  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}

  const [errorCt, setErrorCt] = useState("");
  const userid=localStorage.getItem("userid");
  const [errorAmt, setErrorAmt] = useState("");
  const [erroracct, setErroracct] = useState("");
  const [errordate, setErrordt] = useState("");
  const Ereset=()=>{
    setCategory("")
    setaccountType("")
    setdate("")
    setAmount("")
  }

  const FormValidation =()=>{ axios.post("/expense",
  {category:category,amount:amount,accountType:accountType,date:date,userid:userid} 
 ).then((res)=>{console.log(res.data)
history.push('/trans')})}
 console.log(category);


 
 const validate = (e) => {

   e.preventDefault()
   if(category===""|| amount==="" || accountType==="" ||date===""){
    if(category === ""){
      setErrorCt("*SELECT THE CATEGORY")
    }
    else{
      setErrorCt("")
    }
 
    if (amount === "") {
 
        setErrorAmt("*ENTER THE AMOUNT")
 
    }
    else {
        setErrorAmt("")
    }
    if (accountType === ""){
      setErroracct("*ENTER THE ACCOUNT TYPE")
    }
    else{
      setErroracct("")
    }
    if (date === "") {
      setErrordt("*ENTER THE START DATE")
    }
    else {
      setErrordt("")
    }
   }
else{
  FormValidation()
}
  
  
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
          <span className="text">NEW EXPENSES</span>
        </div>
            <button  id="Exp_back" type="submit" value="back"  onClick={() => history.push('/expense')}>Back</button>
          
                 <div className="Exp_card3">
                  <div id="Exp_heading">ADD A NEW EXPENSE</div>
                  <div className="Exp_form">
                      <div className="Exp_felements">
                          <label>Category</label>
                          <select className="Exp_input" style={{borderColor:errorCt=== "" ?"#004680":'red'}} onChange={(e)=>{setCategory(e.target.value)
                            setErrorCt("")}}>
                            <option value=""  selected >Select Category</option>
                            <option value="Hotel" selected={category === 'Hotel'}>Hotel</option>
                            <option value="Health" selected={category === 'Health'}>Health</option>
                            <option value="Pet care" selected={category === 'Pet care'}>Pet care</option>
                            <option value="Shopping" selected={category === 'Shopping'}>Shopping</option>
                            <option value="Transport" selected={category === 'Transport'}>Transport</option>
                            <option value="Recharges" selected={category === 'Recharges'}>Recharges</option>
                            <option value="Vegetables" selected={category === 'Vegetabled'}>Vegetables</option>
                            <option value="Others" selected={category === 'Others'}>Others</option>
                        </select>
                        {/* <div className='exp_error'  style={{color: 'red',fontweight:300}}>{errorCt === "" ? "" : errorCt}</div> */}
                      </div>
                      <div className="Exp_felements">
                        <label>Amount</label>
                        <input type="text" className="Exp_input" value={amount} style={{borderColor:errorAmt=== "" ?"#004680":'red'}} onChange={(e)=>{setAmount(e.target.value)
                            setErrorAmt("")}}/>
                    </div> 
                    {/* <div className='exp_error'  style={{color: 'red',fontweight:300}}>{errorAmt === "" ? "" : errorAmt}</div> */}
  
                      <div className="Exp_felements">
                          <label>Account Type</label>
                          <div className="Exp_radio">
                              <input type="radio" name="option" id="Exp_bank" value="Bank" style={{outline:erroracct=== "" ?"#004680":'1px solid red'}}  checked={accountType === 'Bank'} onChange={(e)=>{setaccountType(e.target.value)
                            setErroracct("")}}/>
                              <label for="bank"> Bank</label> 
                              <input type="radio" name="option" id="Exp_wallet" value="Wallet" style={{outline:erroracct=== "" ?"#004680":'1px solid red'}}  checked={accountType === 'Wallet'} onChange={(e)=>{setaccountType(e.target.value)
                            setErroracct("")}}/>
                              <label for="wallet"> Wallet</label>
                          </div>
                      </div>
                      {/* <div className='exp_error'  style={{color: 'red',fontweight:300}}>{erroracct === "" ? "" : erroracct}</div>                    */}
                      <div className="Exp_felements">
                          <label>Date</label>
                          <input type="date" className="Exp_input" value={date} style={{borderColor:errordate=== "" ?"#004680":'red'}} onChange={(e)=>{setdate(e.target.value)
                            setErrordt("")}}/>
                      </div> 
                      {/* <div className='exp_error'  style={{color: 'red',fontweight:300}}>{errordate === "" ? "" : errordate}</div> */}
                      <div className="Exp_felements">
                        
                          <button type="submit" className="Exp_btn" onClick={(e)=>validate(e)}>SAVE</button>
                    <button type="submit" className="Exp_btn" onClick={()=>{history.push("/expense")}}>CANCEL</button>
                      </div>
                      </div>
                      </div>
            </section>
        </div>
    )
}

export default Expform
