import {React,useState} from 'react';
import Chart from './Chart';
import {Link,useHistory} from 'react-router-dom';

function Forecast() {
  let history=useHistory();
  const [categoryfc, setCategoryfc] = useState("")
  const [fromaccountfc, setFromaccountfc] = useState("")

  const [errorcfc,setErrorCfc]=useState("")
  const [errorFafc,setErrorFafc]=useState("")

  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}

  const applyfc=()=>{
    console.log("hello");
    if(categoryfc=="month")
      history.push("/frbarchart");

    if(categoryfc=="day")
      history.push("/frdaybr");
  }

  const validatefc = (e) => {
    e.preventDefault()
    console.log("hi");
    if(categoryfc === ""||fromaccountfc === ""){
      if (categoryfc === "") {
        setErrorCfc("* Select a Category")
      }
      else {
        setErrorCfc("")
      }
  
      if (fromaccountfc === "") {
        setErrorFafc("*Select a Account")
      }
  
      else {
        setErrorFafc("")
      }
    }
    else{
        applyfc();
    }
    
  
  }

    return (
        <div>
            <html lang="en" dir="ltr">
                <head>
                    <meta charset="UTF-8" />
                    <link rel="stylesheet" href="MMM2.css" />
                    {/* <!-- Boxiocns CDN Link --> */}
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

                    {/* <!-- Home-Section --> */}

                    <section className="home-section">
                        <div className="home-content">
                            <i className='bx bx-menu'></i>
                            <span className="text">Chart:Forecasts</span>
                        </div>
                        {/* <!-- Box --> */}
                        <div className="topButtons">
                            {/* <a href="MMM.html" className="cts-fc">Categories</a> */}
                            <Link to="/chart" className="cts-fc">Categories</Link>
                            {/* <a href="forecast.html" className="frs-fc">Forecasts</a> */}
                            <Link to="/forecast" className="frs-fc">ForeCast</Link>
                        </div>

                        <div className="boxxx-fc">
                            <div className="showCt">
                                <div className="firstRButton-fc">
                                    <p>Show all the Categories:</p>
                                    <label className="radio">
                                        <span className="radio__input">
                                            <span className="radio__control"></span>
                                        </span>
                                        <input style={{outline:errorcfc=== "" ?"":'1px solid red'}}className="radio__label" id="fc2" type="radio" name="grp1" value="month" onChange={(e) => {
                                          setCategoryfc(e.target.value)
                                          setErrorCfc("")}}/>Month
                                    </label>
                                    <label className="radio">
                                        <span className="radio__input">
                                            <span className="radio__control"></span>
                                        </span>
                                        <input style={{outline:errorcfc=== "" ?"":'1px solid red'}}className="radio__label" id="fc1" type="radio" name="grp1" value="day" onChange={(e) => {
                                          setCategoryfc(e.target.value)
                                          setErrorCfc("")}}/>Day
                                    </label>
                                    {/* <div className='ct-form' style={{color:'rgb(194, 106, 106)'}}>{errorcfc === "" ? "" : errorcfc}</div> */}
                                </div>

                                <div className="fromacc-fc">
                                    <p>From:</p>
                                    <select style={{borderColor:errorFafc=== "" ?"":'red'}} onChange={(e) => {setFromaccountfc(e.target.value)  
                                    setErrorFafc("") }}>
                                    <option selected disabled>Select</option>
                                    <option>Both Accounts</option>
                                    <option>Bank Account</option>
                                    <option>Wallet</option>
                                    </select>
                                    {/* <div className='ct-form' style={{color:'rgb(194, 106, 106)'}}>{errorFafc === "" ? "" : errorFafc}</div> */}
                                </div>
                            </div>
                            <button onclick="fn2()" className="apply-fc" id="btn1" onClick={(e) => validatefc(e)}>Apply</button>
                        </div>
                    </section>


                    <script src="scriptm.js"></script>
                </body>
            </html>
        </div>
    )
}

export default Forecast
