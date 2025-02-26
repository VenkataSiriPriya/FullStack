import React, { Component } from 'react'
import'../CSS/ProjectHomePage.css'
import { callApi } from '../api';
export class ProjectHomePage extends Component {
  constructor()
    {
      super();
      this.userRegistration = this.userRegistration.bind(this);
    }
  
  showSignin(){
    let popup=document.getElementById("popup");
    let signin=document.getElementById("signin");
    let signup=document.getElementById("signup");
    let popupHeader=document.getElementById("popupHeader");
    popupHeader.innerHTML="Login";
    signin.style.display="block";
    signup.style.display="none";
    popup.style.display="block";
  }
  showSignup(){
    let popup=document.getElementById("popup");
    let signin=document.getElementById("signin");
    let signup=document.getElementById("signup");
    let popupHeader=document.getElementById("popupHeader");
    popupHeader.innerHTML="SignUP";
    signin.style.display="none";
    signup.style.display="block";
    popup.style.display="block";

    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let role = document.getElementById("role");
    let  signuppassword = document.getElementById("signuppassword");
    let confirmpassword = document.getElementById("confirmpassword");

    fullname.value= "";
    email.value = "";
    role.value = "";
    signuppassword.value = "";
    confirmpassword.value = "";
  }


  closeSignin(event){
    if(event.target.id==="popup")
    {
      let popup=document.getElementById("popup");
    popup.style.display="none";
    }
  }
  userRegistration()
  {
        let fullname = document.getElementById("fullname");
        let email = document.getElementById("email");
        let role = document.getElementById("role");
        let  signuppassword = document.getElementById("signuppassword");
        let confirmpassword = document.getElementById("confirmpassword");

        fullname.style.border = "";
        email.style.border = "";
        role.style.border = "";
        signuppassword.style.border = "";
        confirmpassword.style.border = "";
        if(fullname.value=="")
        {
          fullname.style.border = "1px solid red";
          fullname.focus();
          return;
        }
        if(email.value=="")
          {
            email.style.border = "1px solid red";
            email.focus();
            return;
          }
          if(role.value=="")
            {
              role.style.border = "1px solid red";
              role.focus();
              return;
            }
            if(signuppassword.value=="")
              {
                signuppassword.style.border = "1px solid red";
                signuppassword.focus();
                return;
              }
              if(confirmpassword.value=="")
                {
                  confirmpassword.style.border = "1px solid red";
                  confirmpassword.focus();
                  return;
                }
                if(signuppassword.value !== confirmpassword.value)
                {
                  signuppassword.style.border = "1px solid red";
                  signuppassword.focus();
                  return;
                }

  


        var data = JSON.stringify({
              fullname : fullname.value,
              email : email.value,
              role : role.value,
              password : signuppassword.value
        })
        callApi("POST", "http://localhost:8080/users/signup", data, this.getResponse)
  }
  getResponse(res){
    let resp = res.split('::');
    alert(resp[1]);
    if (resp[0] === "200")
      {
          let signin = document.getElementById("signin");
          let signup = document.getElementById("signup");
          signin.style.display = "block";
          signup.style.display = "none";
      }
  }

  render() {
    return (
      <div id='base'>
        <div id='popup' onClick={this.closeSignin}>
          <div className='popupWindow'> 
          <div id='popupHeader'>Login</div>
          <div id='signin'>
          <label className='usernameLabel'>Username:</label>
                 <input type='text' id = 'username' />
                 <label className='passwordLabel'>Password:</label>
                 <input type='password' id = 'password' />
                 <div className='forgotPassword'>Forgot<label>Password?</label></div>
                 <button className='signinButton'>Sign In</button>
         
          <div className='div1'></div>
          <div className='div2'>
                  Don't have an account?
                  <label onClick={this.showSignup}> SIGNUP NOW </label>
                  </div>
                  </div>
                  <div id='signup'>
                    <label>Full Name:</label>
                    <input type='text' id="fullname"/>
                    <label>Email:</label>
                    <input type='email' id="email"/>
                    <label>Select Role:</label>
                    <select id='role'>
                      <option value=''></option>
                      <option value='1'>Admin</option>
                      <option value='2'>Employer</option>
                      <option value='3'>Job Seeker</option>
                    </select>
                    <label>Password:</label>
                    <input type='password'id="signuppassword"/>
                    <label>Confirm Password:</label>
                    <input type='password'id="confirmpassword"/>
                    <button onClick={this.userRegistration}>Register Now</button>
                    <div>Already have an account?<span onClick={this.showSignin}>SignIn</span></div>
                    </div>
        </div>
        </div>
        <div id='header'>
          <img className='logo' src="./images/logo1.png" alt="no" />
          <img className='signIcon' src="./images/user.png" alt="sign"onClick={this.showSignin}/>
          <label className='signinText'>SignIn</label>
        </div>
        
        <div id='content'>
          <center>
          <div className='text1'>INDIA's #1 JOB PORTAL - KLJobPortal</div>
          <div className='text2'>Your job search ends here</div>
          <div className='text3'>Discover career opportunites</div>
          <div className='searchBar'>
            <input type="text" className='searchText' placeholder='Search by Skill'/>
            <input type="text" className='searchLocation' placeholder='Job Location'/>
            <button className='searchButton'>Search Job</button>
          </div>
          </center>
          </div>
       
        <div id='footer'>
          <label className='copyrightText'>Copyright &copy; M.V.Siri Priya - KL University.All rights reserved</label>
          <img className='socialmediaIcon' src="./images/facebook.png"/>
          <img className='socialmediaIcon' src="./images/linkedin.png"/>
          <img className='socialmediaIcon' src="./images/twitter.png"/>
        </div>

      </div>


    )
  }
}

export default ProjectHomePage