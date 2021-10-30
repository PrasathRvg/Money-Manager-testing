import React from 'react'
import './Style.css'
import {useHistory} from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';

function AddIncome() {
    let history = useHistory();
    const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [accountType, setaccountType] = useState("")
  const [date, setdate] = useState("")
  const userid=localStorage.getItem("userid");
  const [errorCt, setErrorCt] = useState("");
  const [errorAmt, setErrorAmt] = useState("");
  const [erroracct, setErroracct] = useState("");
  const [errordate, setErrordt] = useState("");
  const Ereset=()=>{
    setCategory("")
    setaccountType("")
    setdate("")
    setAmount("")
  }
  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}
  const FormValidation =()=>{ axios.post("/income",
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
                  history.push('/income');
              }} type="button" className="income_backbutton">Back</button>
          </a>
          </div>
          <div className="income_add-form">
            <div className="income_title">ADD INCOME</div>
            <div className="income_form">
                <div className="income_inputfield">
                    <label>Category</label>
                    <select className="income_tab" value={category} style={{borderColor:errorCt=== "" ?"#004680":'red'}} onChange={(e)=>{setCategory(e.target.value)
                            setErrorCt("")}}>
                        <option value="" disabled>Select Category</option>
                        <option value="Salary" selected={category === 'Salary'}>Salary</option>
                        <option value="Business" selected={category === 'Business'}>Business</option>
                        <option value="Gift" selected={category === 'Gift'}>Gift</option>
                        <option value="Bonus" selected={category === 'Bonus'}>Bonus</option>
                        <option value="Pension" selected={category === 'Pension'}>Pension</option>
                        <option value="Others" selected={category === 'Others'}>Others</option>
                    </select>
                    {/* <div className='exp_error'  style={{color: 'red',fontweight:300}}>{errorCt === "" ? "" : errorCt}</div> */}
                </div>

                <div className="income_inputfield">
                    <label>Amount:</label>
                    <input className="income_tab" type="number" placeholder="Enter the Amount" value={amount} style={{borderColor:errorAmt=== "" ?"#004680":'red'}} onChange={(e)=>{setAmount(e.target.value)
                            setErrorAmt("")}}/>
                </div>
                {/* <div className='exp_error'  style={{color: 'red',fontweight:300}}>{errorAmt === "" ? "" : errorAmt}</div> */}

                <div className="income_inputfield">
                    <label className= "income_la">Account Type</label>
                    <div className="income_radio">
                        
                        <input type="radio" name="option" id="bank" value="bank" style={{outline:erroracct=== "" ?"#004680":'1px solid red'}}  checked={accountType === 'bank'} onChange={(e)=>{setaccountType(e.target.value)
                            setErroracct("")}}/>
                        <label for="bank"> Bank</label>
                                        
                        <input type="radio" name="option" id="wallet" value="wallet" style={{outline:erroracct=== "" ?"#004680":'1px solid red'}} checked={accountType === 'wallet'} onChange={(e)=>{setaccountType(e.target.value)
                            setErroracct("")}}/>
                        <label for="wallet"> Wallet</label>
                     
                    </div>
                    {/* <div className='exp_error'  style={{color: 'red',fontweight:300}}>{erroracct === "" ? "" : erroracct}</div>    */}
                </div>

                <div className="income_inputfield">
                    <label>Date:</label>
                    <input className="income_tab" type="date" value={date} style={{borderColor:errordate=== "" ?"#004680":'red'}} onChange={(e)=>{setdate(e.target.value)
                            setErrordt("")}}/>
                </div>
                {/* <div className='exp_error'  style={{color: 'red',fontweight:300}}>{errordate === "" ? "" : errordate}</div> */}
                <div className="income_savebutton">
                    <button type="submit" onClick={(e)=>{validate(e)}}>Save</button>&nbsp;&nbsp;
                    <button type="submit" onClick={()=>{Ereset()}}>Reset</button>
                </div>

            </div>
          </div>
      </section>
      </section>
    <script src="Script.js"></script>
        </div>
    )
}

export default AddIncome
