import React from 'react'
import {Link, useHistory} from 'react-router-dom'; 
import './Reg.css'
import img1 from '../assets/mm.jpeg'
import { useState } from 'react';
import axios from 'axios';

export default function Reg(props) {
    let history = useHistory();
    
    
    const [name, setName] = useState("");
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [regstatus,setRegstatus] = useState("");
    let validmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    const [nameError, setNameError] = useState('')
    const [mailError, setEmailError] = useState('')
    const [errorpassword, setErrorPassword] = useState("");
    const [errorconfirmpassword, setErrorConfirmPassword] = useState("");

    const register_user = ()=>{axios.post("http://localhost:7081/registeruser",{name:name,mail:mail,password:password,confirmpassword:confirmpassword})
    .then((res)=>{
      if(res.data.message)
      {
        setRegstatus(res.data.message)
      }
      else
      {
        setRegstatus("")
      }})}

    const validatereg = (e) => 
    {
        e.preventDefault()
        if(name==="" || mail==="" || password === "" || confirmpassword === ""|| validmail.test(mail)===false || password.length<=6|| confirmpassword !== password){
        if(name === "")
        {
          setNameError('Enter your Name')
        }
        else
        {
          setNameError('')
        }
        
        if(mail === "")
        {
          setEmailError('Email fied is invalid')
        }
        else if(validmail.test(mail)===false)
        {
          setEmailError('Enter valid Email')
        }
        else
        {
          setEmailError("")
        }
        
        if(password === "")
        {
          setErrorPassword("Enter Password")
        }
        else if(password.length<=6)
        {
          setErrorPassword("Password should be more than 6 characters")
        }
        else 
        {
          setErrorPassword("")
        }
        
        if(confirmpassword === "")
        {
          setErrorConfirmPassword("Enter Confirm Password")
        }
        else if(confirmpassword !== password)
        {
          setErrorConfirmPassword("Password not match")
        }
        else{
          setErrorConfirmPassword("")
        }
      }
        else
        {
          // if(nameError ==="" && mailError==="" && validmail.test(mail) === true && errorpassword==="" &&  errorconfirmpassword==="")
          // {
          //   register_user()
          //   history.push("/login")
          // }
          register_user()
          history.push("/login")
        }
    }

    return (
        <div>
            <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>
        <div className="reg-main">
            <div className="reg-form">
                <div className="reg-image">
                    <img className = "reg-pic" src={img1}/>
                </div>
                <form className= "reg-form-detail" method="POST">
                    <h2 className="regh2">Signup</h2>
                    <div className="reg-input-box">
                        <span className="material-icons">person</span>
                        <input type="text" className ="reg-input-txt" placeholder="Enter your name"  value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setNameError("") }}/>
                    </div>
                    <div className = "reg-error-msg" style={{color: 'red',fontweight:300,fontSize:'13px',textAlign:'center'}}>{nameError}</div>
                    
                    <div className="reg-input-box">
                        <span className="material-icons">email</span>
                        <input type="email" pattern="/^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" className ="reg-input-txt" placeholder="Enter your email" value={mail}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setEmailError("") }} required/>
                    </div>
                    <div className = "reg-error-msg" style={{color: 'red',fontweight:300,fontSize:'13px',textAlign:'center'}}>{mailError}</div>
                    
                    <div className="reg-input-box">
                        <span className="material-icons">lock</span>
                        <input type="password" className ="reg-input-txt" placeholder="Enter your password" value={password}
                        onChange={(e) => { 
                            setPassword(e.target.value)
                            setErrorPassword("") }}/>
                    </div>
                    <div className = "reg-error-msg" style={{color: 'red',fontweight:300,fontSize:'13px',textAlign:'center'}}>{errorpassword}</div> 

                    <div className="reg-input-box">
                        <span className="material-icons">lock</span>
                        <input type="password" className ="reg-input-txt" placeholder="Confirm password" value={confirmpassword}
                        onChange={(e) => { 
                            setConfirmPassword(e.target.value)
                            setErrorConfirmPassword("") }}/>
                    </div>
                    <div className = "reg-error-msg" style={{color: 'red', fontweight:300,fontSize:'13px',textAlign:'center'}}>{errorconfirmpassword}</div>
                    
                    <div className = "reg-error-msg" style={{color: 'red',fontweight:300,fontSize:'13px',textAlign:'center'}}>{regstatus}</div> 
                   
                    <div className="reg-btn-box">
                        <button className="reg" value="Submit" onClick = {(e)=>{
                            validatereg(e)
                        }}>Submit</button>
                    </div>
                    <div className="regtext">Already have an account? <Link to = "/login"><label className="reg-login">Login now</label></Link></div>
                </form>
            </div>
        </div>
        </div>
    )
}
