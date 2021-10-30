import React,{useState} from 'react'
import  './Updatebudget.css';
import {Link,useHistory} from "react-router-dom";
import axios from 'axios';
function Updatebudget(props) {
    console.log(props);
    const {location:{state}}=props;//props.location.state
console.log(state);

const logout=()=>{
  localStorage.clear()
  window.location.reload(true);}

const history=useHistory()

    const[updateBname,setBname]=useState(state.budgetname)
    const[updateCategory,setCategory]=useState(state.category)
    const[updateamount,setAmount]=useState(state.amount)
    const[updatebudgetplan,setbudgetplan]=useState(state.budgetplan)
    const[updatesdate,setsdate]=useState(state.startdate)
    const[updateedate,setedate]=useState(state.enddate)
    const page=()=>{if(updatebudgetplan==="Monthly"){

      history.push({pathname:'/month'})
  
    }
  
    else if(updatebudgetplan==="Weekly"){
  
      history.push({pathname:'/week'})
  
    }
  
    else{
  
      history.push({pathname:'/year'})
  
    }}
    
    const updateTask =()=>{
        axios.put('http://localhost:7081/update_budget',{
            _id:state._id,
            budgetname:updateBname,
            category: updateCategory,
        amount: updateamount,
        budgetplan: updatebudgetplan,
        startdate: updatesdate,
        enddate:updateedate
        }).then((res)=>{
        page()
        })
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
          <form name="myForm" action="/month">
          <div className="budgettitle1">
            New Budget
          </div>
          
          <div className="budgetform">
             <div className="budgetinputfield">
                <label>Budget Name</label>
                <input type="text" className="input" name="fill" value={updateBname} onChange={(e) => {

setBname(e.target.value) }}/>

 
             </div>     
           {/*   <div className='budget_error'>{errorNm === "" ? "" : errorNm}</div>     */}
      <br/>
      </div>
      <div className="budgetform">
             <div className="budgetinputfield">
              <label>Category</label>
              <div className="custom_select">
                <select value={updateCategory} onChange={(e) => {

setCategory(e.target.value)

}}>

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
         {/*  <div className='budget_error'>{errorCt === "" ? "" : errorCt}</div>  */}
        
             <div className="budgetform">
              <div className="budgetinputfield">
                 <label>Amount</label>
                 <input type="text" className="input" name="fill2" value={updateamount} onChange={(e) => {

setAmount(e.target.value)

 }}/>

              </div>  
              {/* <div className='budget_error'>{errorAmt === "" ? "" : errorAmt}</div> */}
              <br/>
              <div className="budgetinputfield">
                <label>BudgetPlan</label>
                <div className="custom_select">
                  <select value={updatebudgetplan} onChange={(e) => {

setbudgetplan(e.target.value)

 }}>

                    <option value="select">Select Budget Plan</option>
                    <option value="Monthly">Monthly Budget</option>
                    <option value="Weekly">Weekly Budget</option>
                    <option value="Yearly">Yearly Budget</option>
                    
                  </select>
                    </div>
               
             </div> 
            {/*  <div className='budget_error'>{errorBpln === "" ? "" : errorBpln}</div> */}
             
             <br/>
             <div className="budgetinputfield">
              <label for="birthday">StartDate</label>
              <input type="date" id="birthday" name="birthday"style={{border: "1px solid",  borderColor: "black", width: "100%",
               height: "100%",borderRadius:"6px",padding: "4px 10px"}} value={updatesdate} onChange={(e) => {

                setsdate(e.target.value)

               }}/><br/>
                
             </div>
            {/*  <div className='budget_error'>{errorSdate === "" ? "" : errorSdate}</div> */}
             <br/>
             <div className="budgetinputfield">
               <label for="birthday">EndDate</label>
               <input type="date" id="birthday" name="birthday"style={{border: "1px solid",  borderColor: "black", width: "100%",
               height: "100%",borderRadius:"6px",padding: "4px 10px"}} value={updateedate} onChange={(e) => {

                setedate(e.target.value)

               }}/>
                
              </div>
              {/* <div className='budget_error'>{errorEdate === "" ? "" : errorEdate}</div> */}
                <div className="budgetinputfield"> 
            
             <input type="reset"value="Reset"  className="btn"/>
            
              <input type="submit" value="Add" className="btn" onClick={()=>{updateTask()
                        setCategory('')
                        setBname('')
                        setAmount('')
                        setbudgetplan('')
                        setsdate('')
                        setedate('')
                        }}/>
            
           </div>
           
          
            
          </div>
        </form> 
      </div>
    
       
   
</section>
</div>
);
}

export default Updatebudget
