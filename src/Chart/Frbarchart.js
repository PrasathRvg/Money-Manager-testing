import React from 'react'
import { Link} from 'react-router-dom';
import { Bar } from "react-chartjs-2";
import './style.css';

function Frbarchart() {

  let countfrbarcht=[101,50,40];

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
              <div className="boxxx-fc-bc">

                <div className="skill">
                  <h1>This Month</h1>
                  <div style={{ maxWidth: "98%", backgroundColor: "linear-gradient(0deg, #e84697, #da1b4b)" }}>
                    <Bar
                      data={{
                        // Name of the variables on x-axies for each bar
                        labels: ["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                        datasets: [
                          {
                            // Label for bars
                            label: "Expense",
                            // Data or value of your each variable
                            data: [10,56,78,34,23,45,75,55,45,32,67,23],
                            // Color of each bar

                            backgroundColor: ["rgba(255, 205, 86, 0.5)"],
                            // Border color of each bar
                            borderColor: ["rgb(255, 205, 86)"],
                            borderWidth: 1,
                            pointHoverBackgroundColor: ["#da1b4b"]
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
                                <div className="name">Jan</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "90%"}}>
                                    <div className="percent">90%</div>
                                </div>
                                <div className="name">Feb</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "57%"}}>
                                    <div className="percent">60%</div>
                                </div>
                                <div className="name">Mar</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "85%"}}>
                                    <div className="percent">85%</div>
                                </div>
                                <div className="name">Apr</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "70%"}}>
                                    <div className="percent">70%</div>
                                </div>
                                <div className="name">May</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "70%"}}>
                                    <div className="percent">70%</div>
                                </div>
                                <div className="name">June</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "80%"}}>
                                    <div className="percent">90%</div>
                                </div>
                                <div className="name">July</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "80%"}}>
                                    <div className="percent">80%</div>
                                </div>
                                <div className="name">Aug</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "57%"}}>
                                    <div className="percent">60%</div>
                                </div>
                                <div className="name">Sep</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "85%"}}>
                                    <div className="percent">85%</div>
                                </div>
                                <div className="name">Oct</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "70%"}}>
                                    <div className="percent">70%</div>
                                </div>
                                <div className="name">Nov</div>
                            </div>
                            <div className="skill">
                                <div className="graph" style={{height: "70%"}}>
                                    <div className="percent">70%</div>
                                </div>
                                <div className="name">Dec</div>
                            </div> */}
                        </div>
                        {/* <a href="forecast.html" className="back-fc-bc">Back</a> */}
                        <Link to="/forecast" className="back-fc-bc">Back</Link>
                    </section>
                    <script src="scriptm.js"></script>
                </body>
            </html>
        </div>
    )
}
export default Frbarchart
