import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import MobileMenu from './mobileMenu.js'

export default class header extends Component {
  constructor() {
    super()
    this.state = {
      cityDropdown: false,
      userDropdown: false,
      menuDropdown: false,
      newCity: false,
      selectedCity: 'San Francisco',
      citiesData: [],
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  clickedMenuDropdown = () => {
    this.setState({
      menuDropdown: !this.state.menuDropdown
    })
  }

  clickedCityDropdown = () => {
    this.setState({
      cityDropdown: !this.state.cityDropdown
    })
  }

  clickedUserDropdown = () => {
    this.setState({
      userDropdown: !this.state.userDropdown
    })
  }

  selectCity = (city) => {
    this.setState({
      selectedCity: city,
      newCity: !this.state.newCity
    }, () => {
      if(this.state.width <= 570){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("panel").style.display = "none"
      }
      console.log(document.getElementsByClassName("about"))
      let city = this.state.citiesData.filter((item) => {
        return item.title == this.state.selectedCity
      })
      const { match, history } = this.props;
      history.push(`/${city[0].slug}`)
    })
  }

  loopCities = () => {
    const self = this;
    return this.state.citiesData.map((item, i) => {
      return (
        <li key={i}
          onClick={this.selectCity.bind(null, item.title)}>{item.title}</li>
      )
    })
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount() {
    const self = this;
    axios.get(`/api/cities`)
      .then(function (response) {
        const { match, history } = self.props;
        let city = response.data.filter((item) => {
          return item.slug == match.params.city
        })
        self.setState({
          citiesData: response.data,
          selectedCity: city[0].title
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateWindowDimensions() {
    this.setState({ width: document.body.clientWidth, height: document.body.clientHeight });
    console.log(this.state)
  }

  render() {
    const { match, history } = this.props;
    return (
      <div>
        {(this.state.width <= 570) ? <MobileMenu newCity={this.state.newCity} 
        selectedCity={this.state.selectedCity} city={match.params.city} cities={this.loopCities()}/> :
          <div className={'background'}>
            <div className={'header-container'}>
              <header>
                <div className={'left-menu'}>
                  <Link to={`/${match.params.city}`} className={'logo'}>Craigslist</Link>
                  <div className={'city-dropdown'} onClick={this.clickedCityDropdown}>
                    {this.state.selectedCity}
                    <i className={`fas fa-chevron-down ${(this.state.cityDropdown) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    <div className={`scroll-area ${(this.state.cityDropdown) ? 'active' : ''}`}>
                      <ul>
                        {this.loopCities()}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={'right-menu'}>
                  <div className={'user-img'}><i className={'far fa-user'}></i></div>
                  <div className={'user-dropdown'} onClick={this.clickedUserDropdown}>
                    My Account
              <i className={`fas fa-chevron-down ${(this.state.userDropdown) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    <div className={`scroll-area ${(this.state.userDropdown) ? 'active' : ''}`}>
                      <ul>
                        <li>Profile</li>
                        <li>Recent Post</li>
                        <li>Sign Out</li>
                      </ul>
                    </div>
                  </div>
                  <div className={'post-btn'}>Post to Classifieds</div>
                </div>
              </header>
            </div>
          </div>
        }
      </div>
    )
  }
}


