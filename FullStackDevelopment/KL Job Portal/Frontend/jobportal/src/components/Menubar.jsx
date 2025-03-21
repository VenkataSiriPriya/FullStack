import React, { Component } from 'react'
importScripts

export class Menubar extends Component {
  render() {
    return (
      <div className='menubar'>
        <div className='menuheader'>MENU <img src='public/images/ICONS/menu.png'alt=''/></div>
        <div className='menulist'>
            <ul>
                <li>Menu Item 1 <img src='public/images/ICONS/list.png'alt=''/></li>
                <li>Menu Item 1 <img src='public/images/ICONS/logo.png'alt=''/></li>
                <li>Menu Item 1 <img src='public/images/ICONS/profile.png'alt=''/></li>
            </ul>
        </div>
        
      </div>
    )
  }
}

export default Menubar