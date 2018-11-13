import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Gallery from './components/gallery.js'

export default class details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allItems: [],
      item: [],
      itemExtras: [],
      prev: 0,
      prevItem: '',
      nextItem: '',
      newItem: [],
      itemIndex: 0,
      width: document.body.clientWidth,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({ width: document.body.clientWidth, height: document.body.clientHeight });
    console.log(this.state)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }


  componentWillMount() {
    const self = this;
    const { match, history } = this.props;
    axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listings}/${match.params.item}`)
      .then(function (response) {
        self.setState({
          item: response.data[0],
          itemExtras: response.data[0].extras
        }, () => {
          console.log(self.state);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listings}`)
      .then(function (response) {
        let newItem;
        let allItems = response.data
        newItem = response.data.filter((item) => {
          return item.extras.vin == match.params.item
        });
        self.setState({
          allItems: allItems,
          newItem: newItem,
          itemIndex: response.data.indexOf(newItem[0]),
        }, () => {
          if (response.data.indexOf(newItem[0]) - 1 >= 0) {
            self.setState({
              prevItem: allItems[response.data.indexOf(newItem[0]) - 1].extras.vin,
            })
          }
          if (response.data.indexOf(newItem[0]) + 1 <= allItems.length - 1) {
            self.setState({
              nextItem: allItems[response.data.indexOf(newItem[0]) + 1].extras.vin,
            })
          }
        })
        console.log(self.state)
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(self.state);
  }

  prevNextBtn() {
    const { match, history } = this.props;
    console.log(this.state.prevItem)
    if (this.state.prevItem == '') {
      return (
        <div className={'directions'}>
          <a href={`/${match.params.city}/${match.params.category}/${match.params.listings}/${this.state.nextItem}`} className={'next'}>next</a>
        </div>
      )
    } else if (this.state.nextItem == '') {
      return (
        <div className={'directions'}>
          <a href={`/${match.params.city}/${match.params.category}/${match.params.listings}/${this.state.prevItem}`} className={'next'}>prev</a>
        </div>
      )
    } else {
      return (
        <div className={'directions'}>
          <a href={`/${match.params.city}/${match.params.category}/${match.params.listings}/${this.state.prevItem}`} className={'next'}>prev</a>
          <a href={`/${match.params.city}/${match.params.category}/${match.params.listings}/${this.state.nextItem}`} className={'next'}>next</a>
        </div>
      )
    }
  }

  render() {
    const { match, location, history } = this.props
    return (
      <div className={'details-page'}>
        <div className={'details-container'}>
          <div className={'white-box'}>

            <section className={'sub-menu'}>
              <div className={'directions'}>
                {this.prevNextBtn()}
              </div>
              {(this.state.width < 1015) ?
                '' :
                <nav className={'sub-links'}>
                  <a href="#">More Ads by User</a>
                  <a href="#">Print</a>
                  <a href="#">Share</a>
                  <a href="#">Contact Seller</a>
                </nav>}
            </section>
            <section className={'content-area'}>
              <div className={'media-column'}>
                <Gallery city={match.params.city} category={match.params.category} listings={match.params.listings} item={match.params.item} />
              </div>
              <div className={'details-column'}>
                <div className={'date'}>Posted: Feb 28th</div>
                <h3 className={'title'}>{this.state.item.title}</h3>
                <h4 className={'price'}>${this.state.item.price}</h4>
                <div className={'more-details'}>
                  <div className={'info'}>
                    <label>Vin</label>
                    <h5>{this.state.itemExtras.vin}</h5>
                  </div>
                  <div className={'info'}>
                    <label>mileage</label>
                    <h5>{this.state.itemExtras.miles}</h5>
                  </div>
                  <div className={'info'}>
                    <label>transmission</label>
                    <h5>{this.state.itemExtras.transmission}</h5>
                  </div>
                </div>
                <div className={'description'}>
                  <label>Description</label>
                  <p>{this.state.item.description}</p>
                </div>
              </div>
            </section>
            {(this.state.width < 1015) ?
              <div id={'subLinks'}>
                <nav className={'sub-links'}>
                  <a href="#">More Ads by User</a>
                  <a href="#">Print</a>
                  <a href="#">Share</a>
                  <a href="#">Contact Seller</a>
                </nav>
              </div>
              : ''}
          </div>
        </div>
      </div>
    )
  }
}


