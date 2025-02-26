import React, { Component } from 'react'
import '../css/ExTwo.css'
export class ExTwo extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
            <div className='header'>Welcome to KL university</div>
            <div className='menu'>
                <span>Home</span>
                <span>About</span>
                <span>Protfolio</span>
                <span>Login</span>
            </div>
        </div>
        <div className='content'>
            <div className='card1'>
                <div className='plogo'>
                    <img src='../images/Hplaptop.jpeg'alt='product.Logo'/>
                </div>
                <div className='pdetails'>
                    <div className='pname'>Product Name-Hp</div>
                    <div className='pother'>
                        <p>Description</p>
                        <p>Rs 10000</p>
                        <p>Year of Manfacture-2023</p>
                    </div>
                </div>
            </div>
            <div className='card1'>
                <div className='plogo'>
                    <img src='../images/Hplaptop.jpeg'alt='product.Logo'/>
                </div>
                <div className='pdetails'>
                    <div className='pname'>Product Name-Hp</div>
                    <div className='pother'>
                        <p>Description</p>
                        <p>Rs 100000</p>
                        <p>Year of Manfacture-2023</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <div className='slogo'>
                <i className="fa fa-facebook-official" style={{fontSize:'36px'}}></i>
                <i className="fa fa-twitter-square" style={{fontSize:'36px'}}></i>
                <i className="fa fa-youtube-square" style={{fontSize:'36px'}}></i>
                <i className="fa fa-google" style={{fontSize:'36px'}}></i>
                <i className="fa fa-instagram" style={{fontSize:'36px'}}></i>
                <i className="fa fa-linkedin-square" style={{fontSize:'36px'}}></i>
            </div>
        </div>
      </div>
    )
  }
}

export default ExTwo