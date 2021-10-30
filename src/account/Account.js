import React,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import './Account.css'
import axios from 'axios'
import {Pie} from 'react-chartjs-2'
function Account() {
  const [account , setAccount] = useState([])
  let accincome=0;
  let walincome=0
  const valaccount=([]);
  const valwallet=([])
  const userid=localStorage.getItem("userid");
  const logout=()=>{
    localStorage.clear();
    window.location.reload(true)
  }
  
  for(let i in account){
    if(account[i].category==="bank" && account[i].userid===userid){
      accincome+=Number(account[i].Amount)
      valaccount.push(account[i])
      console.log(valaccount)
    }
    else if(account[i].category==="wallet" && account[i].userid===userid){
      walincome+=Number(account[i].Amount)
      valwallet.push(account[i])
    }
  }

  console.log("account",accincome)
  console.log("wal",walincome)
  var state = {
    labels: ['Bank', 'Wallet'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
        ],
        hoverBackgroundColor: [
        'rgb(40, 140, 180)',
        'rgb(130, 95, 230)',
        ],
        data: [accincome,walincome]
      }
    ]
  }


  useEffect(() => {
   accountdisplay()
  }, [])

  const accountdisplay =()=>{
    return axios.get('/getaccount').then((res)=>{
       setAccount(res.data)
    })
  }
    return (
        <div>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

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

        <section className="home-section">
            <div className="home-content">
                <i className='bx bx-menu'></i>
                <span className="text">Account</span>
            </div>
            
            <Link to = "/addaccount" style={{textDecoration: 'none'}}>
              <button  className="accountbutton">
                <span className="accountbutton__text" >ADD ACCOUNT</span>
                <span className="accountbutton__icon">
                  <i className='bx bx-message-square-add'></i>
                </span>
              </button>
            </Link>
            
            <div className="acctpie">
                <div className="accth1">
                    <h1 className="acth1">Balance by Accounts</h1>
                </div>
                <div className="acctpiechart">
                
              <Pie
                data={state}
                options={{
                  title: {
                    display: true,
                    text: '',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
                    {/* <h3 className="accth3">Total:₹xxxxx</h3><br /><br />
                    <div className="actinner">
                        <div className="actred"></div>
                        <div id="in"><h4 className="accth4">Wallet</h4></div><br /><br />
                        <div className="actblue"></div>
                        <div id="in"><h4 className="accth4">Bank</h4></div><br /><br /> 
                    </div> */}
                </div>
            </div><br /><br />
            
            <div className="acct-tables">
                <div className="acct-table1">
                    <h1 className="tabh1">BankAccount</h1><br />
                    <div className="acct-head">
                        <div className="acct-cell"><p>Name</p></div>
                        <div className="acct-cell"><p>Bank</p></div>
                        <div className="acct-cell"><p>Account number</p></div>
                        <div className="acct-cell"><p>Balance</p></div>
                    </div>
                    {valaccount.map((e)=>{return(<div className="acct-rows"> 
                        <div className="acct-cell">{e.Name}</div>
                        <div className="acct-cell">{e.BankName}</div>
                        <div className="acct-cell">{e.AccountNumber}</div>
                        <div className="acct-cell">₹{e.Amount}</div>
                    </div>)})}
                    </div>
            </div><br />
            
            <div className="acct-tables">
                <div className="acct-table2">
                    <h1 className = "tabh1">Wallet</h1><br />
                    <div className="acct-head">
                        <div className="acct-cell"><p></p></div>
                        <div className="acct-cell"><p></p></div>
                        <div className="acct-cell"><p></p></div>
                        <div className="acct-cell"><p>Balance</p></div>
                    </div>
                    {valwallet.map((e)=>{return( <div className="acct-rows"> 
                        <div className="acct-cell">{e.category}</div>
                        <div className="acct-cell"></div>
                        <div className="acct-cell"></div>
                        <div className="acct-cell">₹{e.Amount}</div>
                    </div>)})}
                </div>
                </div>
        </section>
        </div>
    )
}

export default Account

