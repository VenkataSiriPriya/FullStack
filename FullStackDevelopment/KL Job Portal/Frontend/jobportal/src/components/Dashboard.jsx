import React, { Component } from 'react'
import'../css/Dashboard.css';
import '../css/Menubar.css';
import Menubar from './Menubar';
import JobPosting from './JobPosting';
import Profile from './Profile';
import JobSearch from './JobSearch';

import { BASEURL, callApi, getSession, setSession } from '../api';

export class Dashboard extends Component { 
  constructor(props)
  {
    super(props);
    this.state = {fullname :",activeComponent:"};
    this.showFullname = this.showFullname.bind(this);
    this.loadComponent = this.loadComponent.bind(this);
  }
  componentDidMount()
  {
    let csr = getSession("csrid");
    //alert(csr);
    if(csr === "")
      this.logout();
    let data = JSON.stringify({csrid : csr});
    callApi("POST", BASEURL + "users/getfullname", data, this.showFullname);
  }
  showFullname(response)
  {
    this.setState({fullname: response});
  }
  logout()
  {
    setSession("csrid", "", -1);
    window.location.replace("/")
  }  

  loadComponent(mid)
  {
    let componets={
      "1":<JobPosting/>,
      "2":<JobSearch/>,
      "3":<Profile/>
    };
    this.setState({activeComponent:componets[mid]});
  }
  render() {
    const {fullname, activeComponent} = this.state;
    return (
      <div className='dashboard'>
        <div className='header'>
        <img className='logo' src='./images/logo1.png' alt='no' />
        <img className='logout' onClick={()=>this.logout()} src='./images/logout.jpg' alt='no' />
        <label>{fullname}</label>
        </div>
        <div className='menu'>
          <Menubar onMenuClick = {this.loadComponent}/></div>
        <div className='outlet'>{activeComponent}</div>
      </div>
    )
  }
}

export default Dashboard