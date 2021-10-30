import React from 'react'
import './Login.css'
import img1 from '../assets/mm.jpeg'
import {Link, useHistory} from 'react-router-dom'; 
import { useState } from 'react';
import validator from 'validator'
import axios from 'axios';


export default function Login(props) {
    let history = useHistory();
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginstatus,setLoginstatus] = useState("");
    const [mailError, setEmailError] = useState('')
    const [errorpassword, setErrorPassword] = useState("");
    
    const loginuser = ()=>{axios.post("/loginuser",{mail:mail,password:password})
    .then((response)=>{
      if(response.data.message == "login success")
      {
    
        localStorage.setItem("userid",response.data._id)
        window.location.reload(true)
        console.log(response.data)
      }
      if(response.data.message){
        setLoginstatus(response.data.message)
      }
      else{
        setLoginstatus("")
      }
    })}

    const validate = (e) => {
    e.preventDefault()
      loginuser()
     }
      
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
      
      <div className="log-main">
        <div className="login-form">
          <form name="form" className="log-form-detail" method="POST">
            <h2 className="loginh2">Login</h2>

            <div className="log-input-box">
              <span className="material-icons">email</span>
              <input type="text" className="log-input-txt" placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailError("") }}/>
            </div>
            <div className = "log-error-msg" style={{color: 'red',fontweight:300,fontSize:'13px',textAlign:'center'}}>{mailError}</div>

            <div className="log-input-box">
              <span className="material-icons">lock</span>
              <input type="password" className="log-input-txt" placeholder="Enter your password" name="password"
              onChange={(e) => { 
                setPassword(e.target.value)
                setErrorPassword("") }}/>
            </div>
            <div className = "reg-error-msg" style={{color: 'red',fontweight:300,fontSize:'13px',textAlign:'center'}}>{errorpassword}</div>

            <div className="text">
              {' '}
              <a className = "forgot"href="#">forgot password?</a>
            </div>
            <br />

            <div className = "reg-error-msg" style={{color: 'red',fontweight:300,fontSize:'13px',textAlign:'center'}}>{loginstatus}</div>
            
            <div className="log-btn-box">
              <input type="submit" className="log" value="Login"  onClick ={ (e)=>{
                            validate(e)}}/>
              
            </div>

            <div className="social">
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook bx-sm"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://accounts.google.com/">
                <i className="bx bxl-google bx-sm"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://account.microsoft.com/">
                <i className="bx bxl-microsoft bx-sm"></i>
              </a>
              &nbsp;&nbsp;
              <a href="https://www.apple.com/in/">
                <i className="bx bxl-apple bx-sm"></i>
              </a>
            </div>

            <div className="text1">
              Don't have an account?{' '}
              <Link to = "/register">
                <label className="log-reg">Signup now</label>
              </Link>
            </div>
          </form>
          <div className="log-image">
            <img className="log-pic" src={img1} />
          </div>
        </div>
      </div>
        </div>
    )
}
