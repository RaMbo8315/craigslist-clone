import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import qs from 'query-string'

export default class gallery extends Component {
  constructor() {
    super()
    this.state = {
      allImgs: [],
      currentImg: '',
      currentIndex: 0,
      item: []
    }
  }

  componentWillMount() {
    const self = this;
    axios.get(`/api/${this.props.city}/${this.props.category}/${this.props.listings}/${this.props.item}`)
    .then(function (response) {
      self.setState({
        item: response.data,
        currentImg: response.data[0].images[self.state.currentIndex],
        allImgs: response.data[0].images
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  allImgsLoop = () => {
    return this.state.allImgs.map((item, i) => {
      return (
        <div key={i} onClick={this.clickedThumb.bind(null, i)} className={'thumb-img'} style={{
          "backgroundImage": `url('${item}')`
        }}></div>
      )
    })
  }

  prevBtn = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  nextBtn = () => {
    if (this.state.currentIndex != (this.state.allImgs.length - 1)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  clickedThumb = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const { match, location, history } = this.props
    return (
      <div className={'gallery'}>
        <div className={'slider'}>
          <div className={'main-image'}>
            <div className={'arrows left-arrow'}
              onClick={this.prevBtn}><i className={'fas fa-chevron-left'}></i></div>
            <div className={'arrows right-arrow'}
              onClick={this.nextBtn}><i className={'fas fa-chevron-right'}></i></div>
            <div className={'image-1'} style={{
              "backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`
            }}></div>
          </div>
        </div>
        <div className={'thumbnails'}>
          {this.allImgsLoop()}
        </div>
      </div>
    )
  }
}


