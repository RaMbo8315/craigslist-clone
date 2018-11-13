import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class mobileMenu extends Component {
  constructor() {
    super()
    this.state = {
      openDropdown: false,
    }
  }

  componentDidMount(){
    let acc = document.getElementsByClassName("about");
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    };
  }

  openMenu = () => {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeMenu = () => {
    this.setState({
      openDropdown: this.props.newCity
    })
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a className="closebtn" onClick={this.closeMenu}>&times;</a>
          <a className="about">Select a City</a>
          <div className="panel dd-content">
            <div className="city-content">
              <ul>
                {this.props.cities}
              </ul>
            </div>
          </div>
          <a className="about">My Account</a>
          <div className="panel dd-content" id={'panel'}>
            <div className="account-content">
              <ul>
                <li>Profile</li>
                <li>Recent Post</li>
                <li>Sign Out</li>
              </ul>
            </div>
          </div>
          <div className={'post-btn'}>post to classifieds</div>
        </div>

        <div className={'background'}>
          <div className={'header-container'}>
            <header>
              <div className={'left-menu'}>
                <Link to={`/${this.props.city}`} className={'logo'}>Craigslist</Link>
              </div>
              <div className={'bars-img'} onClick={this.openMenu}>
                <i className={'fas fa-bars'}></i>
              </div>
            </header>
          </div>
        </div>
      </div>
    )
  }
}


