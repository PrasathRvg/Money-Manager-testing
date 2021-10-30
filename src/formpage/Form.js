import React from 'react';
import  './Form.css';
import {Link,useHistory} from "react-router-dom";
import { useState } from 'react'
import axios from 'axios'
 function Form() {
   let history=useHistory();
  const[budgetname, setName] = useState("");
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [budgetplan, setBudgetplan] = useState("")
  const [startdate, setStartdate] = useState("")
  const [enddate, setEnddate] = useState("")
  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}
  const userid=localStorage.getItem("userid");
  const [errorNm, setErrorNm] = useState("");
  const [errorCt, setErrorCt] = useState("");
  const [errorAmt, setErrorAmt] = useState("");
  const [errorBpln, setErrorBpln] = useState("");
  const [errorSdate, setErrorSdt] = useState("");
  const [errorEdate, setErrorEdt] = useState("");
  const Reset=()=>{
    setName("")
    setCategory("")
    setAmount("")
    setBudgetplan("")
    setStartdate("")
    setEnddate("")
  }

  const page=()=>{if(budgetplan==="Monthly"){
    history.push({pathname:'/month'})
  }
  else if(budgetplan==="Weekly"){
    history.push({pathname:'/week'})
  }
  else{
    history.push({pathname:'/year'})
  }}

  const FormValidation =()=>{ axios.post("http://localhost:7081/budget",
   {budgetname:budgetname,category:category,amount:amount,budgetplan:budgetplan,startdate:startdate,enddate:enddate,userid:userid} 
  ).then((res)=>{console.log(res.data)
    page()})}
  console.log(category);
  
  const validate = (e) => {

    e.preventDefault()

    if(budgetname==="" || category==="" || amount==="" || budgetplan===""||startdate===""|| enddate===""){
      if(budgetname === ""){
        setErrorNm("*ENTER THE BUDGET NAME")
      }
      else{
        setErrorNm("")
      }
  
      if (amount === "") {
  
          setErrorAmt("*ENTER THE AMOUNT")
  
      }
      else {
          setErrorAmt("")
      }
      if (budgetplan === ""){
        setErrorBpln("*SELECT THE BUDGET PLAN")
      }
      else{
        setErrorBpln("")
      }
      if (startdate === "") {
        setErrorSdt("*ENTER THE START DATE")
      }
      else {
        setErrorSdt("")
      }
      if (enddate === "") {
        setErrorEdt("*ENTER THE END DATE")
      }
      else {
        setErrorEdt("")
      }
      if (category === "") {
      setErrorCt("*SELECT THE CATEGORY")
      }
      else {
      setErrorCt("")
      }
    }

   else{
    FormValidation()
  
   } 
  
  }
      
  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
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
                  <Link to="/month"></Link>
                </div>
              </li>
              </li>
            </ul>
          </div>

      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu"></i>
          <span className="text">BUDGET</span>
        </div>
        <Link to="/Month" className="budgetprevious"> Back</Link>
      
 
        <div className="budgetwrapper">
          <form name="myForm" action="#" onsubmit="return validateForm()" method="post" required>
          <div className="budgettitle1">
            New Budget
          </div>
          
          <div className="budgetform">
             <div className="budgetinputfield">
                <label>Budget Name</label>
                <input type="text" className="input" name="fill" value={budgetname} style={{borderColor:errorNm=== "" ?"#004680":'red'}} onChange={(e) => {

setName(e.target.value)

setErrorNm("") }}/>

 
             </div>     
           {/*   <div className='budget_error'>{errorNm === "" ? "" : errorNm}</div>     */}
      <br/>
      </div>
      <div className="budgetform">
             <div className="budgetinputfield">
              <label>Category</label>
              <div className="custom_select">
                <select value={category}  style={{borderColor:errorCt=== "" ?"#004680":'red'}} onChange={(e) => {

setCategory(e.target.value)

setErrorCt("") }}>

                  <option value="select">Select Category</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Grooming">Grooming</option>
                  <option value="Food">Food</option>
                  <option value="Shopping">Shopping</option>
                  <option value="HealthCare">HealthCare</option>
      
                </select>
               
              </div>
            
           </div> 

        </div>
           
          <br/>
        {/*   <div className='budget_error'>{errorCt === "" ? "" : errorCt}</div>  */}
        
             <div className="budgetform">
              <div className="budgetinputfield">
                 <label>Amount</label>
                 <input type="text" className="input" name="fill2" value={amount} style={{borderColor:errorAmt=== "" ?"#004680":'red'}} onChange={(e) => {

setAmount(e.target.value)

setErrorAmt("") }}/>

              </div>  
             {/*  <div className='budget_error'>{errorAmt === "" ? "" : errorAmt}</div> */}
              <br/>
              <div className="budgetinputfield">
                <label>BudgetPlan</label>
                <div className="custom_select">
                  <select value={budgetplan} style={{borderColor:errorBpln=== "" ?"#004680":'red'}} onChange={(e) => {

setBudgetplan(e.target.value)

setErrorBpln("") }}>

                    <option value="select">Select Budget Plan</option>
                    <option value="Monthly">Monthly Budget</option>
                    <option value="Weekly">Weekly Budget</option>
                    <option value="Yearly">Yearly Budget</option>
                    
                  </select>
                    </div>
               
             </div> 
           {/*   <div className='budget_error'>{errorBpln === "" ? "" : errorBpln}</div>
              */}
             <br/>
             <div className="budgetinputfield">
              <label for="birthday">StartDate</label>
              <input type="date" id="birthday" name="birthday"style={{border: "1px solid",  width: "100%",
               height: "100%",borderRadius:"6px",padding: "4px 10px",borderColor:errorSdate=== "" ?"#004680":'red'}} value={startdate}  onChange={(e) => {

                setStartdate(e.target.value)

                setErrorSdt("") }}/><br/>
                
             </div>
            {/*  <div className='budget_error'>{errorSdate === "" ? "" : errorSdate}</div> */}
             <br/>
             <div className="budgetinputfield">
               <label for="birthday">EndDate</label>
               <input type="date" id="birthday" name="birthday"style={{border: "1px solid",   width: "100%",
               height: "100%",borderRadius:"6px",padding: "4px 10px",borderColor:errorEdate=== "" ?"#004680":'red'}} value={enddate}  onChange={(e) => {

                setEnddate(e.target.value)

                setErrorEdt("") }}/>
                
              </div>
            {/*   <div className='budget_error'>{errorEdate === "" ? "" : errorEdate}</div> */}
                <div className="budgetinputfield"> 
            
             <input type="reset"value="Reset"  className="btn"/>
            
              <input type="submit" value="Add" className="btn" onClick={(e) => validate(e)}/>
            
           </div>
           
          
            
          </div>
        </form>
      </div>
    
       
   
</section>
</div>
);
}


        export default Form;