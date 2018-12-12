import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import qs from 'query-string'
import Filter from '../includes/filter.js'

export default class category extends Component {
  constructor() {
    super()
    this.state = {
      itemsData: [],
      make: '',
      model: '',
      modeln: '',
      min_price: '0',
      max_price: '40000',
      sort: 'newest',
      select_view: 'gallery',
      width: document.body.clientWidth,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.submitFilters = this.submitFilters.bind(this);
  }

  updateWindowDimensions() {
    this.setState({ width: document.body.clientWidth });
    // if (document.body.clientWidth > 400) {
    //   document.getElementById("side-filter").style.width = "0";
    // }
    console.log(this.state)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount() {
    const { match, history } = this.props;
    const self = this;
    console.log(qs.parse(this.props.location.search));
    const queryParams = qs.parse(this.props.location.search);
    const { min_price, max_price, make, model, sort, select_view } = queryParams;
    if (queryParams.min_price != undefined) {
      axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listings}?min_price=${min_price}&max_price=${max_price}&make=${make}&model=${model}&sort=${sort}&select_view=${select_view}`)
        .then(function (response) {
          self.setState({
            itemsData: response.data
          }, () => {
            console.log(self.state);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listings}`)
        .then(function (response) {
          self.setState({
            itemsData: response.data
          }, () => {
            console.log(self.state);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }


  loopItems() {
    const self = this;
    const { match, history } = this.props;
    return self.state.itemsData.map((item, i) => {
      return (
        <div className={'item'} key={i}>
          <Link to={`/${match.params.city}/${match.params.category}/${match.params.listings}/${item.extras.vin}`}>
            <div className={'image'} style={{ backgroundImage: `url('${item.images[0]}')` }}>
              <div className={'price'}>
                ${item.price}
              </div>

            </div>
          </Link>
          <div className={'details'}>
            <i className={'far fa-star'}></i>
            <Link to={`/${match.params.city}/${match.params.category}/${match.params.listings}/${item.extras.vin}`}>{item.title}</Link>
            <h6>{item.city}</h6>
          </div>
        </div>
      )
    })
  }

  showMakeModelDropdown = () => {
    const { match, location, history } = this.props;
    if (match.params.listings == 'cars-and-trucks') {
      return (
        <div className={'make-model-comp'}>
          <div className={'form-group make'}>
            <label>Make</label>
            <select name='make' className={'make'}
              onChange={this.handleChange}>
              <option value='empty' hidden>Choose make</option>
              <option value='nissan'>Nissan</option>
              <option value='toyota'>Toyota</option>
              <option value='honda'>Honda</option>
            </select>
          </div>
          <div className={'form-group model'}>
            <label>Model</label>
            {this.models()}
          </div>
        </div>
      )
    }
  }

  modelChange = (event) => {
    const model = document.getElementById("model").value;
    const name = event.target.name;
    const value = (event.target.type == 'checkbox') ?
      event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => {

      console.log(this.state)
    })
  }

  handleChange = (event) => {
    let modelList = new Array(3)
    modelList['empty'] = ['Choose a Make'];
    modelList['all'] = ['and model'];
    modelList['honda'] = ['', 'civic', 'accord', 'cr-v'];
    modelList['nissan'] = ['', 'sentra', 'altima', 'maxima'];
    modelList['toyota'] = ['', 'corolla', 'camry', 'avalon'];
    const model = document.getElementById("model").value;
    const name = event.target.name;
    const value = (event.target.type == 'checkbox') ?
      event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => {

      console.log(this.state)
    })

    let select = document.getElementById("make");
    let idx = select.selectedIndex;
    let which = select.options[idx].value;
    let mList = modelList[which];
    console.log(this.state, modelList[select.options[idx].value]);
    let mSelect = document.getElementById("model");

    // let len = mSelect.options.length;
    while (mSelect.options.length > 0) {
      mSelect.remove(0);
    }
    let newOption;
    for (let i = 0; i < mList.length; i++) {
      newOption = document.createElement("option");
      newOption.value = mList[i];
      newOption.text = mList[i];
      try {
        mSelect.add(newOption);
      }
      catch (e) {
        mSelect.appendChild(newOption);
      }
    }

  }


  submitFilters = () => {
    const self = this;
    const { match, location, history } = this.props;
    const { min_price, max_price, make, model, sort, select_view } = this.state;
    axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listings}?min_price=${min_price}&max_price=${max_price}&make=${make}&model=${model}&sort=${sort}&select_view=${select_view}`)
      .then(function (response) {
        self.setState({
          itemsData: response.data
        }, () => {
          console.log(self.state);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    if (this.state.width <= 400) {
      document.getElementById("side-filter").style.width = "0";
    }
  }

  openMenu = () => {
    document.getElementById("side-filter").style.width = "100%";
  }

  render() {
    const { match, location, history } = this.props

    return (
      <div>
        {(this.state.width <= 400) ?
          <Filter handleChange={this.handleChange} min_price={this.state.min_price}
            max_price={this.state.max_price} modelChange={this.modelChange}
            submitFilters={this.submitFilters} />
          : ''}
        <div className={'listings-page'}>
          <div className={'container'}>
            <section id={'filter-with-btn'}>
              {(this.state.width <= 400) ?
                <div className={'filter-btn'} onClick={this.openMenu}>Filter</div>
                :
                <div id={'filter'}>
                  <div className={'form-group price'}>
                    <label>Price</label>
                    <div className={'min-max'}>
                      <select name='min_price' className={'min-price'}
                        onChange={this.handleChange} value={this.state.min_price}>
                        <option value='0'>0</option>
                        <option value='1000'>1000</option>
                        <option value='5000'>5000</option>
                        <option value='15000'>15000</option>
                        <option value='20000'>20000</option>
                      </select>
                      <select name='max_price' className={'max-price'}
                        onChange={this.handleChange} value={this.state.max_price}>
                        <option value='10000'>10000</option>
                        <option value='20000'>20000</option>
                        <option value='27000'>27000</option>
                        <option value='35000'>35000</option>
                        <option value='40000'>40000</option>
                      </select>
                    </div>
                  </div>
                  <div className={'make-model-comp'}>
                    <div className={'form-group make'}>
                      <label>Make</label>
                      <select name='make' className={'make'} id={'make'}
                        onChange={this.handleChange}>
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
                        onChange={this.modelChange}>
                        <option value='0'>and model</option>
                      </select>
                    </div>
                  </div>
                  <div className={'form-group button'}>
                    <div className={'primary-btn'} onClick={this.submitFilters}>Update</div>
                    <div className={'reset-btn'}>Reset</div>
                  </div>
                </div>
              }
            </section>
          </div>
          <section id={'list-view'}>
            <div className={'container'}>
              <div className={'white-box'}>
                <section className={'change-view'}>
                  <div className={'form-group view-dropdown'}>
                    <select name='select_view' className={'select-view'}
                      onChange={this.handleChange} value={this.state.select_view}>
                      <option value='gallery'>Gallery View</option>
                      <option value='list'>List View</option>
                      <option value='thumb'>Thumb View</option>
                    </select>
                  </div>
                  <div className={'form-group sort-dropdown'}>
                    <select name='sort' className={'sort-view'}
                      onChange={this.handleChange} value={this.state.sort}>
                      <option value='newest'>Newest</option>
                      <option value='oldest'>Oldest</option>
                    </select>
                  </div>
                </section>
                <section className={'all-items'}>
                  {this.loopItems()}
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}


