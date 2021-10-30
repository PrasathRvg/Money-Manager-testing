import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import bal from '../assets/balance (1).png'
import exp from '../assets/expenses.png'
import not from '../assets/notification-bell.png'
import pro from '../assets/profit (2).png'
import userimg from '../assets/user.png'
import bud from '../assets/BUDGET.png'
import { Link,useHistory } from 'react-router-dom'
import axios from 'axios';
import {Pie,Bar} from 'react-chartjs-2'

function Dashboard() {
  let history = useHistory();
  const [transaction , settransaction] = useState([])
  const [dashborad , setdashboard] = useState([])
  const [budget , setbudget] = useState([])
  const [user , setuser] = useState([])
  const [initialincome,setinitialincome]=useState(0)
  const userid=localStorage.getItem("userid");
  let income=0;
  let expense=0;
  let balance=0;
  let budgets=0;
  let accincome=0;
  let total=0;
  let totalincome=0;
  let activity=[]
  let activity_amount=[]
 
  let dashbord=([])
  let userinfo=([])
 

  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}
 for(let i in dashborad){
  if(dashborad[i].type==="Income" && dashborad[i].userid===userid){
    income+=Number(dashborad[i].amount)
  }
  else if(dashborad[i].type==="Expense" && dashborad[i].userid===userid){
    expense+=Number(dashborad[i].amount)
  }

}

for(let i in dashborad){
  if(dashborad[i].userid===userid){
    for(let j in dashborad[i]){
    // console.log("j",dashborad[i][j])
    if(j==="category"){
     activity.push(dashborad[i][j])
    }
    else if(j==="amount"){
      activity_amount.push(dashborad[i][j])
    }
  }

  }
}
console.log("activity",activity)
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
        'green',
        'red',
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
  
   display()
   dashboarddisplay()
   budgetdisplay()
   userdisplay()
  }, [])

  const display =()=>{
    return axios.get('http://localhost:7081/getincome').then((res)=>{
       console.log(res.data)
       settransaction(res.data)
    })
  }
  const dashboarddisplay =()=>{
    return axios.get('http://localhost:7081/getdashboard').then((res)=>{
       console.log(res.data)
       setdashboard(res.data)
    })
  }
  const budgetdisplay =()=>{
    return axios.get('http://localhost:7081/getbudget').then((res)=>{
       console.log(res.data)
       setbudget(res.data)
    })
  }
  
  const userdisplay =()=>{
    return axios.get('http://localhost:7081/getaccount').then((res)=>{
       console.log(res.data)
       setuser(res.data)
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
                  <i className='bx bx-log-out'onClick={()=>{logout()}}></i>
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
      <i className='bx bx-menu' ></i>
      <span className="text">DashBoard</span>
    </div>
    <div className="content">
      <div className="cards">
          <div className="card">
              <div className="box">
                  <h1>₹ {income+accincome}</h1>
                  <Link to='/income'><h3>INCOME</h3></Link>
              </div>
              <div className="icon-cls">
                  <img src={pro} alt=""/>
              </div>
          </div>
          <div className="card">
            <div className="box">
                <h1>₹ {expense}</h1>
                <Link to='/expense'><h3>EXPENSE</h3></Link>
            </div>
            <div className="icon-cls">
                <img src={exp} alt=""/>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <h1>₹ {budgets}</h1>
                <Link to="/month"><h3>BUDGET</h3></Link>
            </div>
            <div className="icon-cls">
                <img src={bud} alt=""/>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <h1>₹ {balance}</h1>
                <Link to="/account">  <h3>BALANCE</h3></Link>
            </div>
            <div className="icon-cls">
                <img src={bal} alt=""/>
            </div>
        </div>
    </div>
    
    <div className="content1">
      <div className="payment">
          <div className="title">
              <h2>PAYMENT HISTORY</h2>
              <Link to = "/trans" className="btn"> View All</Link>
              
          </div>
          <table>
            <tr>
              <th>ACTIVITY</th>
              <th>DATE</th>
              <th>AMOUNT</th>
            </tr>
          {dashbord.map((e)=>{return(
            
            <tr>
              <td>{e.category}</td>
              <td>{e.date}</td>
              <td style={{color:e.type==="Income"?"green":"red"}}>₹{e.amount}</td>
            </tr>
          
          )})}
          </table>
          
      </div>
      <div className="piechart">
        <div className="pie">
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
          {/* <h4 id="p1">30%</h4>
          <h4 id="p2">70%</h4>
          <div className="inner">
            <div className="red"></div>
            <div id="in"><h5>Income</h5></div>
          <div className="green"></div>
          <div id="exp"><h5>Expense</h5></div>
      </div> */}
          </div>
      </div>
  </div>
    </div>
    <div className="balance">
      <div className="bal1">

      </div>
    </div>
    <div className="cont">
      {/* <div className="box1">
        <div className="skill">
          <div className="graph" style={{height:"80%"}}>
            <div className="percent">₹20,000</div>
          </div>
          <div className="name">Jan-20</div>
        </div>
          <div className="skill">
          <div className="graph" style={{height:"90%"}}>
            <div className="percent">₹30,000</div>
          </div>
          <div className="name">Jan-21</div>
        </div>
          <div className="skill">
          <div className="graph" style={{height:"57%"}}>
            <div className="percent">₹14,000</div>
          </div>
          <div className="name">Jan-22</div>
        </div>
          <div className="skill">
          <div className="graph" style={{height:"85%"}}>
            <div className="percent">₹28,000</div>
          </div>
          <div className="name">Jan-23</div>
        </div>
          <div className="skill">
          <div className="graph" style={{height:"70%"}}>
            <div className="percent">₹16,000</div>
          </div>
          <div className="name">Jan-24</div>
        </div>
      </div> */}
      <div className="skill">
      <h1>Latest Transactions</h1>
                  <div style={{ maxWidth: "98%", backgroundColor: "linear-gradient(0deg, #e84697, #da1b4b)" }}>
                    <Bar
                      data={{
                        // Name of the variables on x-axies for each bar
                        
                        labels: activity,
                        datasets: [
                          {
                            // Label for bars
                            label: "Income and Expense",
                            // Data or value of your each variable
                            data: activity_amount,
                            // Color of each bar

                            backgroundColor: ["rgba(153, 102, 255, 0.5)"],
                            // Border color of each bar
                            borderColor: ["rgb(153, 102, 255)"],
                            borderWidth: 1,
                          },
                        ],
                      }}
                      // Height of graph
                      height={400}

                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                // The y-axis value will start from zero
                                beginAtZero: true,
                              },
                            },
                          ],
                        },
                        legend: {
                          labels: {
                            fontSize: 15,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
    </div>
    <div className="main">
      <div className="header">
          <div className="nav">
              <div className="user">
                  <img src={not} alt=" " id="img"/>
                  <div className="userimg">
                  <img src={userimg} alt=" "/>
                  </div> 
              </div>
          </div>
      </div>
      </div>
  </section>
        </div>
    )
}

export default Dashboard
