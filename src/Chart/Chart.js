import {React,useEffect,useState} from 'react';
  import './style.css';
import { Link,useHistory} from 'react-router-dom'; 
import axios from 'axios';

function Chart()
{
  const userid=localStorage.getItem("userid");
  let history=useHistory();
  const [category, setCategory] = useState("")
  const [datefrom, setDatefrom] = useState("")
  const [dateto, setDateto] = useState("")
  const [fromaccount, setFromaccount] = useState("");
  const [charttype, setCharttype] = useState("");
  const [subcategories, setSubcategories] = useState("");

  const [errorct,setErrorCt]=useState("")
  const [errordf,setErrordf]=useState("")
  const [errordt,setErrordt]=useState("")
  const [errorfa,setErrorfa]=useState("")
  const [errorcht,setErrorCht]=useState("")
  const [errorsc,setErrorsc]=useState("")

  const [dashborad , setdashboard] = useState([])

  var data=[];
  console.log("Category",category)
  console.log("df",datefrom)
  console.log("fa",fromaccount)
  console.log("ctype",charttype)
  console.log("cht",subcategories)
  console.log("data",data);
  
  
  const dashboarddisplay =()=>{
    return axios.get('/getdashboard').then((res)=>{
       console.log(res.data)
       setdashboard(res.data)
    })
  }

  const logout=()=>{
    localStorage.clear()
    window.location.reload(true);}

  const boxStyle = {
    color: 'red',
  };

  const apply=()=>{
    if(charttype=="barchart"){
      localStorage.setItem("chartdata",JSON.stringify(data));
      history.push("/Barchart");
    }
    if(charttype=="piechart")
      history.push("/Piechart");
  }

  for (let i in dashborad) {
    if (dashborad[i].userid === userid) {
      console.log("dashbord",dashborad[i])
      if (category === "income") {
        // console.log("Inside income");
          if(fromaccount==="Bank Account"){
            // console.log("insidee bank account")
              for(let j in dashborad[i]){
                if(j==="date"){
                  // console.log("inside date")
                  if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto && dashborad[i].type==="Income"&&dashborad[i].accountType==="bank" ){
                    console.log("inside income bank")
                    data.push(dashborad[i]);
                  }
                }
              }
          }
          else if(fromaccount==="Wallet"){
            for(let j in dashborad[i]){
              if(j==="date"){
                console.log("inside wallet of income")
                if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto && dashborad[i].type==="Income" && dashborad[i].accountType==="wallet"){
                  console.log("insidee income wallet")
                  data.push(dashborad[i]);
                }
              }
            }
          }
          else if(fromaccount==="Both Accounts"){
            for(let j in dashborad[i]){
              if(j==="date"){
                console.log("inside date")
                if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto && dashborad[i].type==="Income"){
                  console.log("insidee the data")
                  data.push(dashborad[i]);
                }
              }
            }
          }
      }
      else if (category === "expense") {
        if(fromaccount==="Bank Account"){
          for(let j in dashborad[i]){
            if(j==="date"){
              console.log("inside date")
              if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto && dashborad[i].type==="Expense" && dashborad[i].accountType==="Bank"){
                console.log("insidee expense bank")
                data.push(dashborad[i]);
              }
            }
          }
        }
        else if(fromaccount==="Wallet"){
          for(let j in dashborad[i]){
            if(j==="date"){
              console.log("inside wallet of expense")
              if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto && dashborad[i].type==="Expense" && dashborad[i].accountType==="Wallet"){
                console.log("insidee expense wallet")
                data.push(dashborad[i]);
              }
            }
          }
        }
        else if(fromaccount==="Both Accounts"){
          for(let j in dashborad[i]){
            if(j==="date"){
              console.log("inside date")
              if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto && dashborad[i].type==="expense"){
                console.log("insidee the data")
                data.push(dashborad[i]);
              }
            }
          }
        }
      }
      else if (category === "both") {
        if(fromaccount==="Bank Account"){
          for(let j in dashborad[i]){
            if(j==="date"){
              console.log("inside date")
              if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto &&dashborad[i].accountType==="bank"){
                console.log("insidee the data")
                data.push(dashborad[i]);
              }
            }
          }
        }
        else if(fromaccount==="Wallet"){
          for(let j in dashborad[i]){
            if(j==="date"){
              console.log("inside date")
              if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto &&dashborad[i].accountType==="Wallet"){
                console.log("insidee the data")
                data.push(dashborad[i]);
              }
            }
          }
        }
        else if(fromaccount==="Both Accounts"){
          for(let j in dashborad[i]){
            if(j==="date"){
              console.log("inside date")
              if(dashborad[i][j]>=datefrom && dashborad[i][j]<=dateto){
                console.log("insidee the data")
                data.push(dashborad[i]);
              }
            }
          }
        }
      }
    }
  }
  
  useEffect(() => {
  
    dashboarddisplay()
   }, [])
  console.log("data1",data);

  const validatect = (e) => {                   
    e.preventDefault()

    console.log(charttype);

    if(category === ""||datefrom === ""||dateto === ""||fromaccount === ""||charttype === ""||subcategories === ""){
      if (category === "") {
        setErrorCt("* Select a Category")
      }
      else {
        setErrorCt("")
      }
  
      if (datefrom === "") {
        setErrordf("* Select a Date")
      }
      else {
        setErrordf("")
      }
  
      if (dateto === "") {
        setErrordt("* Select a Date")
      }
      else {
        setErrordt("")
      }
  
      if (fromaccount === "") {
        setErrorfa("*Select a AccountType")
      }
      else {
        setErrorfa("")
      }
  
      if (charttype === "") {
        setErrorCht("*Select a Chart Type")
      }
      else {
        setErrorCht("")
      }
  
      if (subcategories === "") {
        setErrorsc("*Select a SubCategories")
      }
      else {
        setErrorsc("")
      }
    }
    else{
    apply();
    }
  }

    return(
        <div>
        <html lang="en" dir="ltr">
        <head>
          <meta charset="UTF-8"/>
          <link rel="stylesheet" href="style.css"/>
          {/* <Helmet>
            <script src="script.js" type="text/javascript" />
          </Helmet> */}
          {/* <!-- Boxiocns CDN Link --> */}
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
                  <Link to="/"></Link>
                </div>
              </li>
              </li>
            </ul>
          </div>

          
          {/* <!-- Home-Section --> */}
          <section className="home-section">
            <div className="home-content">
              <i className='bx bx-menu'></i>
              <span className="text">Chart:Categories</span>
            </div>
            {/* <!-- Box --> */}
            <div className="topButtons">
               {/* <a href="MMM.html" className="cts">Categories</a> */}
              <Link to="/chart"  class="cts">Categories</Link>
              {/* <a href="forecast.html" className="frs">Forecasts</a> */}
              <Link to="/forecast" className="frs">Forecast</Link>
            </div>
            <div className="boxx">
              <div className="showCt">
                <div className="firstRButton" onChange={(e) => {setCategory(e.target.value)
                      setErrorCt("") }}>
                  <p>Show all the Categories:</p>
                  <label className="radio">
                    <span className="radio__input">
                      <input style={{outline:errorct=== "" ?"":'1px solid red'}} class="chartCtRadio1" value="income" type="radio" name="radio1" />
                      <span className="radio__control"></span>
                    </span>
                    <span className="radio__label">Income</span>
                  </label>
                  <label className="radio">
                    <span className="radio__input">
                      <input style={{outline:errorct=== "" ?"":'1px solid red'}} class="chartCtRadio1" value="expense" type="radio" name="radio1" />
                      <span className="radio__control"></span>
                    </span>
                    <span className="radio__label">Expense</span>
                  </label>
                  <label className="radio">
                    <span className="radio__input">
                      <input style={{outline:errorct=== "" ?"":'1px solid red'}} class="chartCtRadio1" value="both" type="radio" name="radio1" />
                      <span className="radio__control"></span>
                    </span>
                    <span id="bth" className="radio__label">Both</span>
                  </label> 
                  {/* <div style={{color:'rgb(194, 106, 106)'}} className='ct-form'>{errorct === "" ? "" : errorct}</div> */}
                </div>
                <div className="fromTo">
                  <div className="from">
                    <p>From:</p>
                    <input style={{color:errordf=== "" ?"#004680":'red'}} type="date" name="From" id="To" onChange={(e) => {setDatefrom(e.target.value)
                      setErrordf("") }}/>
                    {/* <div className='ct-form' style={{color:'rgb(194, 106, 106)'}}>{errordf=== "" ? "" : errordf}</div> */}
                  </div>
                  <div className="to">
                    <p>To:</p>
                    <input style={{color:errordt=== "" ?"#004680":'red'}} type="date" name="To" id="To" onChange={(e) => {setDateto(e.target.value)
                      setErrordt("") }}/>
                      
                  </div>
                  {/* <div className='ct-form' style={{color:'red'}}>{errordt=== "" ? "" : errordt}</div> */}
                </div>
                <div className="fromacc">
                  <p>From:</p>
                  <select style={{borderColor:errorfa=== "" ?"#004680":'red'}} onChange={(e) => {setFromaccount(e.target.value)  
                      setErrorfa("") }}>
                    <option selected disabled>Select</option>
                    <option>Both Accounts</option>
                    <option>Bank Account</option>
                    <option>Wallet</option>
                  </select>
                  {/* <div className='ct-form' style={{color:'rgb(194, 106, 106)',display:'inline'}}>{errorfa=== "" ? "" : errorfa}</div> */}
                </div >
                <div className="botRadio">
                    <div className="secondRButton" >
                        <p>Chart Type:</p>
                        <label className="radio">
                          <span className="radio__input">
                            <span className="radio__control"></span>
                          </span>
                          <input style={{outline:errorcht=== "" ?"":'1px solid red'}} className="radio__label" id="rd2" type="radio" name="grp1" value="barchart" onChange={(e) => {
                          setCharttype(e.target.value)
                          setErrorCht("")}}/>Bar chart
                        </label>
                        <label className="radio">
                          <span className="radio__input">
                            <span className="radio__control"></span>
                          </span>
                          <input style={{outline:errorcht=== "" ?"":'1px solid red'}} className="radio__label" id="rd1" type="radio" name="grp1" value="piechart" onChange={(e) => {
                          setCharttype(e.target.value)
                          setErrorCht("")}}/>Piechart
                        </label>
                        {/* <div className='ct-form' style={{ color: 'rgb(194, 106, 106)' }}>{errorcht === "" ? "" : errorcht}</div> */}
                    </div>
                  <div className="thirdRButton" onChange={(e) => {setSubcategories(e.target.value)
                      setErrorsc("") }}>
                    <p>Categories:</p>
                    <label className="radio">
                      <span className="radio__input">
                        <input style={{outline:errorsc=== "" ?"":'1px solid red'}}type="radio" value="maincategory"name="radio3" />
                        <span className="radio__control"></span>
                      </span>
                      <span className="radio__label">Main-Categories</span>
                    </label>
                    <label className="radio">
                      <span className="radio__input">
                        <input style={{outline:errorsc=== "" ?"":'1px solid red'}}type="radio" value="subcategory" name="radio3" />
                        <span className="radio__control"></span>
                      </span>
                      <span className="radio__label">Sub-Categories</span>
                    </label>
                  </div>
                </div>
              </div>
              <button onclick="fn1()" className="apply"id="btn1" onClick={(e) => validatect(e)}>Apply</button>
              {/* <button onclick="fn1()" className="apply"id="btn1" onClick={(e) => [validatect(e)]}>Apply</button> */}
            </div>
          </section>
          {/* <script src="scriptm.js"></script> */}
        </body>
        </html>
        </div>
    );
}

export default Chart;