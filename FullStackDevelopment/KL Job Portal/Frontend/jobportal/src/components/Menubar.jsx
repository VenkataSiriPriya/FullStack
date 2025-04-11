import React, { Component } from 'react'
import "../css/Menubar.css"
import { BASEURL, callApi, getSession} from '../api';
import { data} from 'react-router-dom';
export class Menubar extends Component {
  constructor(){
    super();
    this.state = {menuItems : []};
    this.loadMenus = this.loadMenus.bind(this);
  }
  componentDidMount(){
    let csr = getSession("csrid");
    let data = JSON.stringify({csrid:csr});
    
    callApi("POST", BASEURL + "menus/getmenusbyrole", data, this.loadMenus)
  }
  loadMenus(response){
    let data = JSON.parse(response);
    this.setState({menuItems : data});
  }

  render() {
    const{menuItems}=this.state
    return (
      <div className='menubar'>
        <div className='menuheader'>MENU <img src='../images/menu.png' alt=''></img></div>
        <div className='menulist'>
  <ul>
    {menuItems.map((row) => (
       <li onClick={()=>this.props.onMenuClick(row.mid)}>{row.menu} <img src = {row.icon} alt='' /></li>
    ))}
  </ul>
</div>

      </div>
    )
  }
}

export default Menubar