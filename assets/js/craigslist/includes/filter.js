import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class filter extends Component {
  constructor() {
    super()
    this.state = {}
  }

  updateWindowDimensions() {
    this.setState({ width: document.body.clientWidth });
    if (document.body.clientWidth > 400) {
      document.getElementById("side-filter").style.width = "0";
    }
    console.log(this.state)
  }


  openMenu = () => {
    document.getElementById("side-filter").style.width = "100%";
  }

  closeMenu = () => {
    document.getElementById("side-filter").style.width = "0";
  }

  render() {
    return (
      <div>
        <div id="side-filter" className="sideFilter">
          <a className="closebtn" onClick={this.closeMenu}>&times;</a>
          <div id={'filter'}>
            <div className={'form-group price'}>
              <label>Price</label>
              <div className={'min-max'}>
                <select name='min_price' className={'min-price'}
                  onChange={this.props.handleChange} value={this.props.min_price}>
                  <option value='0'>0</option>
                  <option value='1000'>1000</option>
                  <option value='5000'>5000</option>
                  <option value='15000'>15000</option>
                  <option value='20000'>20000</option>
                </select>
                <select name='max_price' className={'max-price'}
                  onChange={this.props.handleChange} value={this.props.max_price}>
                  <option value='10000'>10000</option>
                  <option value='20000'>20000</option>
                  <option value='27000'>27000</option>
                  <option value='35000'>35000</option>
                  <option value='40000'>40000</option>
                </select>
              </div>
            </div>
            <div className={'form-group make'}>
              <label>Make</label>
              <select name='make' className={'make'} id={'make'}
                onChange={this.props.handleChange}>
                <option value='empty' hidden>Choose make</option>
                <option value='all'>All</option>
                <option value='nissan'>Nissan</option>
                <option value='toyota'>Toyota</option>
                <option value='honda'>Honda</option>
              </select>
            </div>
            <div className={'form-group model'}>
              <label>Model</label>
              <select name='model' id={'model'} className={'model'}
                onChange={this.props.modelChange}>
                <option value='0'>and model</option>
              </select>
            </div>
          </div>
          <div className={'form-group button'}>
            <div className={'primary-btn'} onClick={this.props.submitFilters}>Update</div>
            <div className={'reset-btn'}>Reset</div>
          </div>
        </div>
      </div>
    )
  }
}


