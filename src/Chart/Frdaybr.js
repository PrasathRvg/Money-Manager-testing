import React from 'react'
import { Link} from 'react-router-dom';
import { Bar } from "react-chartjs-2";
import './style.css';


function Frdaybr() {

let count1=[101,50.40];

const logout=()=>{
  localStorage.clear()
  window.location.reload(true);}

    return (

        <div>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8"/>
  <link rel="stylesheet" href="style.css"/>
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
<div className="sidebar close">
            <div className="logo-details">
              <i className='bx bxl-bitcoin'></i>
              <span className="logo_name">Money Manager</span>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/Dashboard">
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

          {/* Home Section */}

    <section className="home-section">
        <div className="home-content">
            <i className='bx bx-menu'></i>
            <span className="text">Forecast:BarChart</span>
        </div>

    
        {/* <!-- box --> */}
        <div className="boxxx-fc-dbc">
                <div className="skill">
                  <h1>This Week</h1>
                  <div style={{ maxWidth: "98%",backgroundColor:"linear-gradient(0deg, #e84697, #da1b4b)" }}>
                    <Bar
                      data={{
                        // Name of the variables on x-axies for each bar
                        labels: ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],
                        datasets: [
                          {
                            // Label for bars
                            label: "Expense",
                            // Data or value of your each variable
                            data: [10,20,23,34,6,34,19],
                            // Color of each bar
                            
                            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)"],
                            // Border color of each bar
                            borderColor: ["rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)"],
                            borderWidth: 1,
                            pointHoverBackgroundColor:["#da1b4b"]
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




            {/* <div className="skill">
                <div className="graph" style={{height: "80%"}}>
                    <div className="percent">80%</div>
                </div>
                <div className="name">Mon</div>
            </div>
            <div className="skill">
                <div className="graph" style={{height: "90%"}}>
                    <div className="percent">90%</div>
                </div>
                <div className="name">Tue</div>
            </div>
            <div className="skill">
                <div className="graph" style={{height: "57%"}}>
                    <div className="percent">60%</div>
                </div>
                <div className="name">Wed</div>
            </div>
            <div className="skill">
                <div className="graph" style={{height: "85%"}}>
                    <div className="percent">85%</div>
                </div>
                <div className="name">Thur</div>
            </div>
            <div className="skill">
                <div className="graph" style={{height: "70%"}}>
                    <div className="percent">70%</div>
                </div>
                <div className="name">Fri</div>
            </div>
            <div className="skill">
                <div className="graph" style={{height: "70%"}}>
                    <div className="percent">70%</div>
                </div>
                <div className="name">Sat</div>
            </div>
            <div className="skill">
                <div className="graph" style={{height: "90%"}}>
                    <div className="percent">90%</div>
                </div>
                <div className="name">Sun</div>
    </div>    */} 
        </div> 
        {/* <a href="forecast.html" className="back-fc-dbc">Back</a> */}
        <Link to="/forecast" className="back-fc-dbc">Back</Link>
    </section>
    <script src="scriptm.js"></script>


</body>
</html>
        </div>
    )
}

export default Frdaybr
