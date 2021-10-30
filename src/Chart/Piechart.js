import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';
import './style.css';



function Piechart() {

  const [transaction , settransaction] = useState([])
  const [dashborad , setdashboard] = useState([])
  const [budget , setbudget] = useState([])
  const [user , setuser] = useState([])

  const userid=localStorage.getItem("userid");
  let income=0;
  let expense=0;
  let balance=0;
  let budgets=0;
  let accincome=0;
  let total=0;
  let totalincome=0;
 
  let dashbord=([])
  let userinfo=([])
 
 for(let i in dashborad){
  if(dashborad[i].type==="Income" && dashborad[i].userid===userid){
    income+=Number(dashborad[i].amount)
  }
  else if(dashborad[i].type==="Expense" && dashborad[i].userid===userid){
    expense+=Number(dashborad[i].amount)
  }

}
console.log("income",income)
console.log("exp",expense)


 for(let i in user){
  if(user[i].userid===userid){
    accincome+=Number(user[i].Amount)
  }
}
total=income+expense+accincome
totalincome=income+accincome;
balance=totalincome-expense
console.log(balance)
console.log(totalincome)
 let incomeper=Number(totalincome/total)*100
  console.log(incomeper)
  let expper=Number(expense/total)*100

 for(let i in user){
  if(user[i].userid===userid){
    console.log(user[i])
    userinfo.push(user[i])
  }
}

 for(let i in budget){
   if(budget[i].userid===userid){
    budgets+=Number(budget[i].amount)
   }
 }
console.log(income)

for(let i in transaction){
  console.log("user",transaction[i].userid)
  if(transaction[i].userid===userid){
    dashbord.push(transaction[i])
  }
}

  
var state = {
  labels: ['Income', 'Expense'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#2FDE00',
        '#B21F00',
      ],
      hoverBackgroundColor: [
      '#175000',
      '#501800',
      ],
      data: [incomeper,expper]
    }
  ]
}

useEffect(() => {
  dashboarddisplay()
  userdisplay()
 }, [])

 const dashboarddisplay =()=>{
  return axios.get('http://localhost:7081/getdashboard').then((res)=>{
     console.log(res.data)
     setdashboard(res.data)
  })
}

 const userdisplay =()=>{
  return axios.get('http://localhost:7081/getaccount').then((res)=>{
     console.log(res.data)
     setuser(res.data)
  })
}

const logout=()=>{
  localStorage.clear()
  window.location.reload(true);}

    return (

      
      
      <div>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="MMM2.css" />
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>

          <body>
            <div className="sidebar close">
              <div className="logo-details">
                <i className='bx bxl-bitcoin'></i>
                <span className="logo_name">Money Manager</span>
              </div>
              <ul className="nav-links">
                <li>
                  <Link to="/Dashbord">
                    <i className='bx bxs-dashboard'></i>
                    <span className="link_name">Dashboard</span>
                  </Link>
                  <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Dashboard</a></li>
                  </ul>
                </li>
                <li>
                  <Link to="/Income">
                    <i className='bx bx-italic'></i>
                    <span className="link_name">Income</span>
                  </Link>
                  <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Income</a></li>
                  </ul>
                </li>
                <li>
                  <div className="iocn-link">
                    <Link to="/Expense">
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
                    <Link to="/Month">
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
                  <Link to="/Account">
                    <i className='bx bx-rupee'></i>
                    <span className="link_name">Account</span>
                  </Link>
                  <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Account</a></li>
                  </ul>
                </li>
                <li>
                  <div className="iocn-link">
                    <Link to="/Chart">
                      <i className='bx bxs-doughnut-chart'></i>
                      <span className="link_name">Chart</span>
                    </Link>
                  </div>
                  <ul className="sub-menu">
                    <li><a className="link_name" href="#">Chart</a></li>
                  </ul>
                </li>
                <li>
                  <Link to="/Help">
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
                  <li><a className="link_name">Logout</a></li>
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
                      <Link to="/Home"></Link>
                    </div>
                  </li>
                </li>
              </ul>
            </div>

            {/* <!-- Home-Section --> */}

            <section className="home-section">
              <div className="home-content">
                <i className='bx bx-menu'></i>
                <span className="text">Pie Chart</span>
              </div>

              {/* <!-- Box --> */}

              <div className="boxx">
                <div className="piechart-ct">
                  <div className="pie-ct">

                    <Doughnut
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: 'Average Rainfall per month',
                          fontSize: 20
                        },
                        legend: {
                          display: true,
                          position: 'right'
                        }
                      }}
                    />

                    {/* <div className="inner-ct">
                      <div className="yellow-ct"></div>
                      <div id="in-ct">
                        <h5>Income 35%</h5>
                      </div>
                      <div className="darkyellow-ct"></div>
                      <div id="exp-ct">
                        <h5>Expense 65%</h5>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <a href="MMM.html" className="back-pc">Back</a> */}
              <Link to="/chart" className="back-pc">Back</Link>

            </section>

            {/* <script src="scriptm.js"></script> */}
          </body>
        </html>
      </div>
    )
}

export default Piechart

