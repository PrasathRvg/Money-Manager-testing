import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Week.css';
import axios from 'axios';

function Week() {
  let history = useHistory();
  const [income , setIncome] = useState([])
  const [user , setuser] = useState([])
  const Budgets=([])
  const valincome=([]);
  const userid=localStorage.getItem("userid");

  for(let i in income){
    if(income[i].type==="Income" && income[i].userid===userid){
      valincome.push(income[i]);
    }
    console.log(valincome)
  }

  let Income=0;
  let expense=0;
  let balance=0;
  let budgets=0;
  let dashbord=([])
  let userinfo=([])
 for(let i in income){
  if(income[i].type==="Income" && income[i].userid===userid){
    Income+=Number(income[i].amount)
  }
  else if(income[i].type==="Expense" && income[i].userid===userid){
    expense+=Number(income[i].amount)
  }
 }

 let accincome=0;


  for(let i in user){
    if(user[i].userid===userid){
      accincome+=Number(user[i].Amount)
    }
  }

  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}
    const [wamtwidth,setAmtwidthw]=useState()
    useEffect( ()=>{
      displayincomew()
    },[])
    const displayincomew=()=>{
      return axios.get("/getincome").then((res)=>{
            console.log(res.data)
            setIncome(res.data)
    })
    }
    console.log(wamtwidth);
    
      const [wform,setFormw]= useState([])

      useEffect( ()=>{
        displayw()
        userdisplay()
      },[])
      for(let i in wform ){
        if(wform[i].userid===userid){
          Budgets.push(wform[i])
        }
      }
      
      const userdisplay =()=>{
        return axios.get('/getaccount').then((res)=>{
           console.log(res.data)
           setuser(res.data)
        })
      }
    
      const displayw =() =>{
          return axios.get("/getbudget").then((res)=>{
            console.log(res.data)
            setFormw(res.data)
          })
      }
      const deleteBudget =(id)=>{
        axios.delete(`/remove/${id}`).then((res)=>{
             displayw();
             
      })
    }
      console.log(wform);
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
                  <Link to="/"></Link>
                </div>
              </li>
              </li>
            </ul>
          </div>
          <section class="home-section">
        <div class="home-content">
          <i class="bx bx-menu"></i>
          <span class="text">BUDGET</span>
        </div>

        <Link to="/form" style={{ textDecoration: 'none' }}>
          <button type="button" class="budgetbutton">
            <span class="button__text">NEW BUDGET</span>
            <span class="button__icon">
              <i class="bx bx-message-square-add"></i>
            </span>
          </button>
        </Link>

        <div class="budgetmain">
          <div class="budgetcard">
            <div class="budgettitle">
              
              <h1 style={{ fontSize: '25px', fontFamily: 'Poppins' }}>
                ₹{Income+accincome}
              </h1>
            </div>
            <div class="budgetdes">
              <img
                src="https://img.icons8.com/color/48/000000/money-bag-pound.png"
                width="80"
              />
              <p
                style={{
                  fontSize: '25px',
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                }}
              >
                INCOME
              </p>
            </div>
          </div>

          <div class="budgetcard">
            <div class="budgettitle">
              <h1 style={{ fontSize: '25px', fontFamily: 'Poppins' }}>
                ₹{expense}
              </h1>
            </div>

            <div class="budgetdes">
              <img
                src="https://img.icons8.com/color/48/000000/budget.png"
                width="80"
              />
              <p
                style={{
                  fontSize: '25px',
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                }}
              >
                EXPENSES
              </p>
            </div>
          </div>

          <div class="budgetcard">
            <div class="budgettitle">
              <h1 style={{ fontSize: '25px', fontFamily: 'Poppins' }}>
                ₹{Income+accincome-expense}
              </h1>
            </div>

            <div class="budgetdes">
              <img
                src="https://img.icons8.com/color/48/000000/refund.png"
                width="80"
              />
              <p
                style={{
                  fontSize: '25px',
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                }}
              >
                BALANCE
              </p>
            </div>
          </div>

          <div class="budgetorder">
            <Link to="/month"
              class="budgetprevious1"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 'bold',
              }}
            >
              MONTH
            </Link>
            <Link to="/week"
              class="budgetprevious1"
              style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
            >
              WEEK
            </Link>
            <Link to="/year"
              class="budgetprevious1"
              style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
            >
              YEAR
            </Link>
          </div>

          <div class="budgetbdy">
            <h1 class="budgetheading">
              <button class="arrowsbutton">&#10094;</button>&nbsp;&nbsp; WEEK &nbsp;
              <button class="arrowsbutton">&#10095;</button>&nbsp;&nbsp;{' '}
            </h1>

            <div class="budgetskill-bars">
              <div class="budgetbar">
            {Budgets.map((e)=>{
              const percent=Math.floor(e.amount/Income*100)
               if(e.budgetplan==="Weekly"){
             return(
            <div>
                <div class="budgetinfo">
                  <img src="https://img.icons8.com/color/48/000000/money-bag.png" />
                  <span style={{ color: '#004680', fontWeight: 'bold' }}>
                  {e.category}
                  </span>
                  <p
                    style={{
                      color: '#004680',
                      marginLeft: '85%',
                      fontWeight: 'bold',
                    }}
                  >
                  ₹{e.amount}
                  </p>
                </div>
                  <div class="progress-line html">
                    
                  <span style={{fontWeight:"bold",width: `${percent}%`}}>{percent}%</span>
                 
                </div>
                <br/>
              <button type="button" class="budgetbutton2" >
              <a class="button__text2"onClick={() => {
                    history.push({ pathname: '/Updatebudget', state: e })
                }}>Edit</a>
                </button>
                &nbsp;&nbsp;
                <button type="button" class="budgetbutton2">
                <a class="button__text2" onClick={() => deleteBudget(e._id)}>Delete</a>
                </button>
             </div>
  
             )}
           })}
           </div>
              </div>
              
          </div>
          <br />
        </div>
      </section>
    </div>
  );
}
export default Week;
