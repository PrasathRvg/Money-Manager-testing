import React,{useState,useEffect} from 'react'
import './Transaction.css';
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios';



function Transaction_month() {
  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}
  
  let history = useHistory();
  const [income , setIncome] = useState([])
  const userid=localStorage.getItem("userid");
  const transaction=([])
  console.log(userid)

  for(let i in income){
    console.log("user",income[i].userid)
    if(income[i].userid===userid){
      console.log("user",income[i].userid)
      transaction.push(income[i])
    }
  }
console.log("transaction",transaction)

  useEffect(() => {
   incomedisplay()
  }, [])

  const incomedisplay =()=>{
    return axios.get('http://localhost:7081/getincome').then((res)=>{
       setIncome(res.data)
    })
  }

  const deleteTask =(id)=>{
    axios.delete(`http://localhost:7081/deletetransaction/${id}`).then((res)=>{
         incomedisplay();
  })
}


    return (
        <div>
                <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
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
      <i class='bx bx-menu'></i>
      <span class="text">Transaction</span>
    </div>
        <section>

                <br/>

                {transaction.map((e)=>{
                  return(
                    
                    <div>
                      <div class="courses-container">
                        <div class="course">
                          <div class="course-preview" style={{ background: e.type === "Income" ? "green" : "red" }}>
                            <h2>{e.category}</h2>
                            <a>{e.accountType}<i class="fas fa-chevron-right"></i></a>
                          </div>
                          <div class="course-info">
                            <div class="progress-container">
                              <div class="progress"></div>
                            </div>
                            <h3>{e.date}</h3>
                            <h2 class="amt"  style={{ color: e.type === "Income" ? "green" : "red" }}>₹ {e.amount}</h2>
                            <a class="btn-1" onClick={() => {if(e.type==="Income"){
                               history.push({ pathname: '/updateform', state: e })
                            }
                            else{
                              history.push({ pathname: '/updateforms', state: e })
                            }
                            }}>Edit</a>
                            <a class="btn-2" onClick={() => deleteTask(e._id)}>Delete</a>
                          </div>
                        </div>
                      </div>


                    </div>
                  )
                })}
               
                </section>
                </section>
        </div>
    )
}

export default Transaction_month
