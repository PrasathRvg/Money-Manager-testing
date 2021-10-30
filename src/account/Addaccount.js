import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import './Addaccount.css'
import axios from 'axios'
export default function Addaccount() {
  var history=useHistory()
  const validIFSC = new RegExp(
    '^[A-Za-z]{4}0[A-Z0-9a-z]{6}$'
 );
  const [Name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [BankName, setBankName] = useState("")
  const [AccountNumber, setAccountNumber] = useState("")
  const [IFSC, setIFSC] = useState("")
  const [Amount, setAmount] = useState("")
  const [errorname, setErrorname] = useState("");
  const [errorCt, setErrorCt] = useState("");
  const [errorbk, setErrorbk] = useState("");
  const [errorAn, setErrorAn] = useState("");
  const [errorifsc, setErrorifsc] = useState("");
  const [erroramt, setErroramt] = useState("");
  const userid=localStorage.getItem("userid");
  const reset=()=>{
    window.location.reload();
  }
  const logout=()=>{
    localStorage.clear();
    window.location.reload(true)
  }
  const Reset=()=>{
    setName("")
    setBankName("")
    setCategory("")
    setAccountNumber("")
    setIFSC("")
    setAmount("")
  }
  const AccountValidation=()=>{axios.post('/acctform',
  {Name:Name,category:category,BankName:BankName,AccountNumber:AccountNumber,IFSC:IFSC,Amount:Amount,userid:userid}
  ).then((res)=>{console.log(res.data)
  history.push('/account')})}
console.log(category);


  const validate = (e) => {



    e.preventDefault()

if(Name==="" || category==="" || BankName==="" || AccountNumber==="" || IFSC ==="" || Amount==="" || (AccountNumber.length<9 || AccountNumber.length>18) || (!validIFSC.test(IFSC))){
    if (Name === "") {



        setErrorname("*Enter Name")



    }



    else {



        setErrorname("")



    }



    if (category === "") {


      setErrorCt("*Select Category")



    }
    else if(category==="wallet"){
      setErrorCt("")
    }




    else {



      setErrorCt("")



    }



    if (BankName === "") {



    setErrorbk("*Enter Bank Name")



    }
    else {



    setErrorbk("")



    }



    if (AccountNumber === "" ) {

    setErrorAn("*Enter Account Number")
    



    }
    else if(AccountNumber.length<9 || AccountNumber.length>18){
      setErrorAn("*Enter A Valid Account Number")
    }



    else {



    setErrorAn("")



    }
    if (IFSC === "") {



      setErrorifsc("*Enter IFSC Code")
  
  
  
      }
      else if(!validIFSC.test(IFSC)){
        setErrorifsc("*Enter A Valid IFSC Code")
      }

  
  
  
      else {
  
  
  
      setErrorifsc("")
  
  
  
      }
      if (Amount === "") {



        setErroramt("*Enter the Amount")
    
    
    
        }
    
    
    
        else {
    
    
    
        setErroramt("")
        }
      }
      else{
        AccountValidation()
      }
  }

  const walletvalidate = (e) => {



    e.preventDefault()

if(Name==="" || category==="" || Amount==="" ){
    if (Name === "") {



        setErrorname("*Enter Name")



    }



    else {



        setErrorname("")



    }



    if (category === "") {


      setErrorCt("*Select Category")



    }
    else {



      setErrorCt("")



    }
    if (Amount === "") {



      setErroramt("*Enter the Amount")
  
  
  
      }
  
  
  
      else {
  
  
  
      setErroramt("")
      }

      }
      else{
        AccountValidation()
      }
  }
   const isdisabled=()=>{
     if(category==="wallet"){
       return false;
     }
    }

    return (
        <div>
            <link rel="stylesheet" href="addaccount.css"/>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
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
                <i className='bx bx-menu'></i>
                <span className="text">Add Account</span>
            </div>
            <Link to = "/account" style={{textDecoration: 'none' }}>
                <button className="acct-addbutton">
                <span className="acct_addbutton__text" >BACK</span>
              </button>
            </Link>
            
            <div className="addacct-form">
                <div className="act-title">ADD ACCOUNT</div>
                <div className="act-form">
                    <div className="act-inputfield">
                        <label className="inplabel">Name</label>
                        <input type="text" className="act-input" value={Name} style={{borderColor:errorname=== "" ?"#004680":'red'}} onChange={(e)=>{setName(e.target.value)
                           setErrorname("")}}/>
                    </div>
                    {/* <div className="account-error" style={{color: 'red',fontweight:300}}><br/>{errorname===""?"":errorname}</div> */}

                    <div className="act-inputfield">
                        <label className="inplabel">Category</label>
                        <div className="radio-btn">
                            <input type="radio" name="option" id="bank" value="bank" style={{outline:errorCt=== "" ?"#004680":'1px solid red'}} checked={category === 'bank'} onChange={(e)=>{setCategory(e.target.value)
                           setErrorCt("")}}/>
                            <label for="bank" className="rdlabel"> Bank</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            
                            <input type="radio" name="option" id="wallet" value="wallet" style={{outline:errorCt=== "" ?"#004680":'1px solid red'}} checked={category === 'wallet'} onChange={(e)=>{setCategory(e.target.value)
                           setErrorCt("")}}/>
                            <label for="wallet" className="rdlabel"> Wallet</label>
                            {/* <div style={{color: 'red',fontweight:300}}>{errorCt===""?"":errorCt}</div> */}
                        </div>
                    </div>
                    
                    <div className="act-inputfield">
                        <label className="inplabel">Bank Name</label>
                        <input type="text" className="act-input" value={BankName} style={{borderColor:errorbk=== "" ?"#004680":'red'}} disabled={category==="wallet"?true:false}onChange={(e)=>{setBankName(e.target.value)
                           setErrorbk("")}}/>
                    </div> 
                    {/* <div className="account-error" style={{color: 'red',fontweight:300}}>{errorbk===""?"":errorbk}</div> */}
                    
                    <div className="act-inputfield">
                        <label className="inplabel">Account number</label>
                        <input type="text" className="act-input" value={AccountNumber} style={{borderColor:errorAn=== "" ?"#004680":'red'}} disabled={category==="wallet"?true:false} onChange={(e)=>{setAccountNumber(e.target.value)
                           setErrorAn("")}}/>
                    </div> 
                    <div className="account-error" style={{color: 'red',fontweight:300}}><br/>{category==="bank"?errorAn===""?"":errorAn:""}</div>

                    <div className="act-inputfield">
                        <label className="inplabel">IFSC CODE</label>
                        <input type="text" className="act-input" value={IFSC} style={{borderColor:errorifsc=== "" ?"#004680":'red'}} disabled={category==="wallet"?true:false} onChange={(e)=>{setIFSC(e.target.value)
                        setErrorifsc("")}}/>
                    </div> 
                    <div className="account-error" style={{color: 'red',fontweight:300}}><br/>{category==="bank"?errorifsc===""?"":errorifsc:""}</div>
                    
                
                    <div className="act-inputfield">
                        <label className="inplabel">Amount</label>
                        <input type="text" className="act-input" value={Amount} style={{borderColor:erroramt=== "" ?"#004680":'red'}} onChange={(e)=>{setAmount(e.target.value)
                        setErroramt("")}} /><br/>
                    </div>
                    {/* <div className="account-error" style={{color: 'red',fontweight:300}} >{erroramt===""?"":erroramt}</div> */}
                
                    <div className="act-inputfield">
                        <input type="submit" value="Save" className="sbtn" onClick={(e) => {category==="bank"?validate(e):walletvalidate(e)}
                        }/>
                        <input type="submit" value="Reset" className="sbtn" onClick={()=>reset()}/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
