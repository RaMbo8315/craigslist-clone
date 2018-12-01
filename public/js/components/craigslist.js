webpackJsonp([0],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(8);

var _header = __webpack_require__(72);

var _header2 = _interopRequireDefault(_header);

var _home = __webpack_require__(77);

var _home2 = _interopRequireDefault(_home);

var _details = __webpack_require__(76);

var _details2 = _interopRequireDefault(_details);

var _category = __webpack_require__(74);

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:city', component: _header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:item', component: _details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(50);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), app);

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(8);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var filter = function (_Component) {
  _inherits(filter, _Component);

  function filter() {
    _classCallCheck(this, filter);

    var _this = _possibleConstructorReturn(this, (filter.__proto__ || Object.getPrototypeOf(filter)).call(this));

    _this.openMenu = function () {
      document.getElementById("side-filter").style.width = "100%";
    };

    _this.closeMenu = function () {
      document.getElementById("side-filter").style.width = "0";
    };

    _this.state = {};
    return _this;
  }

  _createClass(filter, [{
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ width: document.body.clientWidth });
      if (document.body.clientWidth > 400) {
        document.getElementById("side-filter").style.width = "0";
      }
      console.log(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'side-filter', className: 'sideFilter' },
          _react2.default.createElement(
            'a',
            { className: 'closebtn', onClick: this.closeMenu },
            '\xD7'
          ),
          _react2.default.createElement(
            'div',
            { id: 'filter' },
            _react2.default.createElement(
              'div',
              { className: 'form-group price' },
              _react2.default.createElement(
                'label',
                null,
                'Price'
              ),
              _react2.default.createElement(
                'div',
                { className: 'min-max' },
                _react2.default.createElement(
                  'select',
                  { name: 'min_price', className: 'min-price',
                    onChange: this.props.handleChange, value: this.props.min_price },
                  _react2.default.createElement(
                    'option',
                    { value: '0' },
                    '0'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5000' },
                    '5000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '15000' },
                    '15000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '20000' },
                    '20000'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'max_price', className: 'max-price',
                    onChange: this.props.handleChange, value: this.props.max_price },
                  _react2.default.createElement(
                    'option',
                    { value: '10000' },
                    '10000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '20000' },
                    '20000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '27000' },
                    '27000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '35000' },
                    '35000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '40000' },
                    '40000'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group make' },
              _react2.default.createElement(
                'label',
                null,
                'Make'
              ),
              _react2.default.createElement(
                'select',
                { name: 'make', className: 'make', id: 'make',
                  onChange: this.props.handleChange },
                _react2.default.createElement(
                  'option',
                  { value: 'empty', hidden: true },
                  'Choose make'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'all' },
                  'All'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'nissan' },
                  'Nissan'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'toyota' },
                  'Toyota'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'honda' },
                  'Honda'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group model' },
              _react2.default.createElement(
                'label',
                null,
                'Model'
              ),
              _react2.default.createElement(
                'select',
                { name: 'model', id: 'model', className: 'model',
                  onChange: this.props.modelChange },
                _react2.default.createElement(
                  'option',
                  { value: '0' },
                  'and model'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group button' },
            _react2.default.createElement(
              'div',
              { className: 'primary-btn', onClick: this.props.submitFilters },
              'Update'
            ),
            _react2.default.createElement(
              'div',
              { className: 'reset-btn' },
              'Reset'
            )
          )
        )
      );
    }
  }]);

  return filter;
}(_react.Component);

exports.default = filter;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(8);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _mobileMenu = __webpack_require__(73);

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var header = function (_Component) {
  _inherits(header, _Component);

  function header() {
    _classCallCheck(this, header);

    var _this = _possibleConstructorReturn(this, (header.__proto__ || Object.getPrototypeOf(header)).call(this));

    _this.clickedMenuDropdown = function () {
      _this.setState({
        menuDropdown: !_this.state.menuDropdown
      });
    };

    _this.clickedCityDropdown = function () {
      _this.setState({
        cityDropdown: !_this.state.cityDropdown
      });
    };

    _this.clickedUserDropdown = function () {
      _this.setState({
        userDropdown: !_this.state.userDropdown
      });
    };

    _this.selectCity = function (city) {
      _this.setState({
        selectedCity: city,
        newCity: !_this.state.newCity
      }, function () {
        if (_this.state.width <= 570) {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("panel").style.display = "none";
        }
        console.log(document.getElementsByClassName("about"));
        var city = _this.state.citiesData.filter(function (item) {
          return item.title == _this.state.selectedCity;
        });
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        history.push('/' + city[0].slug);
      });
    };

    _this.loopCities = function () {
      var self = _this;
      return _this.state.citiesData.map(function (item, i) {
        return _react2.default.createElement(
          'li',
          { key: i,
            onClick: _this.selectCity.bind(null, item.title) },
          item.title
        );
      });
    };

    _this.state = {
      cityDropdown: false,
      userDropdown: false,
      menuDropdown: false,
      newCity: false,
      selectedCity: 'San Francisco',
      citiesData: [],
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    return _this;
  }

  _createClass(header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('/api/cities').then(function (response) {
        var _self$props = self.props,
            match = _self$props.match,
            history = _self$props.history;

        var city = response.data.filter(function (item) {
          return item.slug == match.params.city;
        });
        self.setState({
          citiesData: response.data,
          selectedCity: city[0].title
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ width: document.body.clientWidth, height: document.body.clientHeight });
      console.log(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        null,
        this.state.width <= 570 ? _react2.default.createElement(_mobileMenu2.default, { newCity: this.state.newCity,
          selectedCity: this.state.selectedCity, city: match.params.city, cities: this.loopCities() }) : _react2.default.createElement(
          'div',
          { className: 'background' },
          _react2.default.createElement(
            'div',
            { className: 'header-container' },
            _react2.default.createElement(
              'header',
              null,
              _react2.default.createElement(
                'div',
                { className: 'left-menu' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/' + match.params.city, className: 'logo' },
                  'Craigslist'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'city-dropdown', onClick: this.clickedCityDropdown },
                  this.state.selectedCity,
                  _react2.default.createElement('i', { className: 'fas fa-chevron-down ' + (this.state.cityDropdown ? 'fa-chevron-up' : 'fa-chevron-down') }),
                  _react2.default.createElement(
                    'div',
                    { className: 'scroll-area ' + (this.state.cityDropdown ? 'active' : '') },
                    _react2.default.createElement(
                      'ul',
                      null,
                      this.loopCities()
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'right-menu' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-img' },
                  _react2.default.createElement('i', { className: 'far fa-user' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'user-dropdown', onClick: this.clickedUserDropdown },
                  'My Account',
                  _react2.default.createElement('i', { className: 'fas fa-chevron-down ' + (this.state.userDropdown ? 'fa-chevron-up' : 'fa-chevron-down') }),
                  _react2.default.createElement(
                    'div',
                    { className: 'scroll-area ' + (this.state.userDropdown ? 'active' : '') },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        'Profile'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        'Recent Post'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        'Sign Out'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'post-btn' },
                  'Post to Classifieds'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return header;
}(_react.Component);

exports.default = header;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(8);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mobileMenu = function (_Component) {
  _inherits(mobileMenu, _Component);

  function mobileMenu() {
    _classCallCheck(this, mobileMenu);

    var _this = _possibleConstructorReturn(this, (mobileMenu.__proto__ || Object.getPrototypeOf(mobileMenu)).call(this));

    _this.openMenu = function () {
      document.getElementById("mySidenav").style.width = "100%";
    };

    _this.closeMenu = function () {
      _this.setState({
        openDropdown: _this.props.newCity
      });
      document.getElementById("mySidenav").style.width = "0";
    };

    _this.state = {
      openDropdown: false
    };
    return _this;
  }

  _createClass(mobileMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var acc = document.getElementsByClassName("about");
      var i = void 0;

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
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'mySidenav', className: 'sidenav' },
          _react2.default.createElement(
            'a',
            { className: 'closebtn', onClick: this.closeMenu },
            '\xD7'
          ),
          _react2.default.createElement(
            'a',
            { className: 'about' },
            'Select a City'
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel dd-content' },
            _react2.default.createElement(
              'div',
              { className: 'city-content' },
              _react2.default.createElement(
                'ul',
                null,
                this.props.cities
              )
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'about' },
            'My Account'
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel dd-content', id: 'panel' },
            _react2.default.createElement(
              'div',
              { className: 'account-content' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'Profile'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Recent Post'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Sign Out'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'post-btn' },
            'post to classifieds'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'background' },
          _react2.default.createElement(
            'div',
            { className: 'header-container' },
            _react2.default.createElement(
              'header',
              null,
              _react2.default.createElement(
                'div',
                { className: 'left-menu' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/' + this.props.city, className: 'logo' },
                  'Craigslist'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bars-img', onClick: this.openMenu },
                _react2.default.createElement('i', { className: 'fas fa-bars' })
              )
            )
          )
        )
      );
    }
  }]);

  return mobileMenu;
}(_react.Component);

exports.default = mobileMenu;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(8);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(34);

var _queryString2 = _interopRequireDefault(_queryString);

var _filter = __webpack_require__(71);

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var category = function (_Component) {
  _inherits(category, _Component);

  function category() {
    _classCallCheck(this, category);

    var _this = _possibleConstructorReturn(this, (category.__proto__ || Object.getPrototypeOf(category)).call(this));

    _this.showMakeModelDropdown = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;

      if (match.params.listings == 'cars-and-trucks') {
        return _react2.default.createElement(
          'div',
          { className: 'make-model-comp' },
          _react2.default.createElement(
            'div',
            { className: 'form-group make' },
            _react2.default.createElement(
              'label',
              null,
              'Make'
            ),
            _react2.default.createElement(
              'select',
              { name: 'make', className: 'make',
                onChange: _this.handleChange },
              _react2.default.createElement(
                'option',
                { value: 'empty', hidden: true },
                'Choose make'
              ),
              _react2.default.createElement(
                'option',
                { value: 'nissan' },
                'Nissan'
              ),
              _react2.default.createElement(
                'option',
                { value: 'toyota' },
                'Toyota'
              ),
              _react2.default.createElement(
                'option',
                { value: 'honda' },
                'Honda'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group model' },
            _react2.default.createElement(
              'label',
              null,
              'Model'
            ),
            _this.models()
          )
        );
      }
    };

    _this.modelChange = function (event) {
      var model = document.getElementById("model").value;
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
      _this.setState(_defineProperty({}, name, value), function () {

        console.log(_this.state);
      });
    };

    _this.handleChange = function (event) {
      var modelList = new Array(3);
      modelList['empty'] = ['Choose a Make'];
      modelList['all'] = ['and model'];
      modelList['honda'] = ['', 'civic', 'accord', 'cr-v'];
      modelList['nissan'] = ['', 'sentra', 'altima', 'maxima'];
      modelList['toyota'] = ['', 'corolla', 'camry', 'avalon'];
      var model = document.getElementById("model").value;
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
      _this.setState(_defineProperty({}, name, value), function () {

        console.log(_this.state);
      });

      var select = document.getElementById("make");
      var idx = select.selectedIndex;
      var which = select.options[idx].value;
      var mList = modelList[which];
      console.log(_this.state, modelList[select.options[idx].value]);
      var mSelect = document.getElementById("model");

      // let len = mSelect.options.length;
      while (mSelect.options.length > 0) {
        mSelect.remove(0);
      }
      var newOption = void 0;
      for (var i = 0; i < mList.length; i++) {
        newOption = document.createElement("option");
        newOption.value = mList[i];
        newOption.text = mList[i];
        try {
          mSelect.add(newOption);
        } catch (e) {
          mSelect.appendChild(newOption);
        }
      }
    };

    _this.submitFilters = function () {
      var self = _this;
      var _this$props2 = _this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;
      var _this$state = _this.state,
          min_price = _this$state.min_price,
          max_price = _this$state.max_price,
          make = _this$state.make,
          model = _this$state.model,
          sort = _this$state.sort,
          select_view = _this$state.select_view;

      _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '?min_price=' + min_price + '&max_price=' + max_price + '&make=' + make + '&model=' + model + '&sort=' + sort + '&select_view=' + select_view).then(function (response) {
        self.setState({
          itemsData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
      if (_this.state.width <= 400) {
        document.getElementById("side-filter").style.width = "0";
      }
    };

    _this.openMenu = function () {
      document.getElementById("side-filter").style.width = "100%";
    };

    _this.state = {
      itemsData: [],
      make: '',
      model: '',
      modeln: '',
      min_price: '0',
      max_price: '40000',
      sort: 'newest',
      select_view: 'gallery',
      width: document.body.clientWidth
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    // this.submitFilters = this.submitFilters.bind(this);
    return _this;
  }

  _createClass(category, [{
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ width: document.body.clientWidth });
      // if (document.body.clientWidth > 400) {
      //   document.getElementById("side-filter").style.width = "0";
      // }
      console.log(this.state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;
      console.log(_queryString2.default.parse(this.props.location.search));
      var queryParams = _queryString2.default.parse(this.props.location.search);
      var min_price = queryParams.min_price,
          max_price = queryParams.max_price,
          make = queryParams.make,
          model = queryParams.model,
          sort = queryParams.sort,
          select_view = queryParams.select_view;

      if (queryParams.min_price != undefined) {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '?min_price=' + min_price + '&max_price=' + max_price + '&make=' + make + '&model=' + model + '&sort=' + sort + '&select_view=' + select_view).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + match.params.listings).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: 'loopItems',
    value: function loopItems() {
      var self = this;
      var _props2 = this.props,
          match = _props2.match,
          history = _props2.history;

      return self.state.itemsData.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { className: 'item', key: i },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '/' + item.extras.vin },
            _react2.default.createElement(
              'div',
              { className: 'image', style: { backgroundImage: 'url(\'' + item.images[0] + '\')' } },
              _react2.default.createElement(
                'div',
                { className: 'price' },
                '$',
                item.price
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement('i', { className: 'far fa-star' }),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '/' + item.extras.vin },
              item.title
            ),
            _react2.default.createElement(
              'h6',
              null,
              item.city
            )
          )
        );
      });
    }

    // models = () => {
    //   if (this.state.make == '') {
    //     return (
    //       <div>
    //         <select name='model' id={'model'} className={'model'}
    //           onChange={this.handleChange}>
    //           <option value=''>and model</option>
    //         </select>
    //       </div>
    //     )
    //   } else if (this.state.make == 'nissan') {
    //     return (
    //       <div>
    //         <select name='model' id={'model'} className={'model'}
    //           onChange={this.handleChange}>
    //           <option value='sentra'>Sentra</option>
    //           <option value='altima'>Altima</option>
    //           <option value='maxima'>Maxima</option>
    //         </select>
    //       </div>
    //     )
    //   } else if (this.state.make == 'toyota') {
    //     return (
    //       <div>
    //         <select name='model' id={'model'} className={'model'}
    //           onChange={this.handleChange}>
    //           <option value='corolla'>Corolla</option>
    //           <option value='camry'>Camry</option>
    //           <option value='avalon'>Avalon</option>
    //         </select>
    //       </div>
    //     )
    //   } else if (this.state.make == 'honda') {
    //     return (
    //       <div>
    //         <select name='model' id={'model'} className={'model'}
    //           onChange={this.handleChange}>
    //           <option value='civic'>Civic</option>
    //           <option value='cr-v'>CR-V</option>
    //           <option value='accord'>Accord</option>
    //         </select>
    //       </div>
    //     )
    //   }

    // }

  }, {
    key: 'render',


    // modelChange = () => {
    //   let modelList = new Array(3)
    //   modelList['empty'] = ['Choose a Make'];
    //   modelList['honda'] = ['civic', 'accord', 'cr-v'];
    //   modelList['nissan'] = ['sentra', 'altima', 'maxima'];
    //   modelList['toyota'] = ['corolla', 'camry', 'avalon'];
    //   // get the index of the selected option 
    //   let idx = document.getElementById("make").selectedIndex;
    //   // get the value of the selected option 
    //   let which = document.getElementById("make").options[idx].value;
    //   // use the selected option value to retrieve the list of items from the countryLists array 
    //   mList = modelList[which];
    //   // get the country select element via its known id 
    //   let mSelect = document.getElementById("model");
    //   // remove the current options from the country select 
    //   let len = mSelect.options.length;
    //   while (mSelect.options.length > 0) {
    //     mSelect.remove(0);
    //   }
    //   let newOption;
    //   // create new options 
    //   for (let i = 0; i < mList.length; i++) {
    //     newOption = document.createElement("option");
    //     newOption.value = mList[i];  // assumes option string and value are the same 
    //     newOption.text = mList[i];
    //     // add the new option 
    //     try {
    //       mSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE 
    //     }
    //     catch (e) {
    //       mSelect.appendChild(newOption);
    //     }
    //   }
    // }

    value: function render() {
      var _props3 = this.props,
          match = _props3.match,
          location = _props3.location,
          history = _props3.history;


      return _react2.default.createElement(
        'div',
        null,
        this.state.width <= 400 ? _react2.default.createElement(_filter2.default, { handleChange: this.handleChange, min_price: this.state.min_price,
          max_price: this.state.max_price, modelChange: this.modelChange,
          submitFilters: this.submitFilters }) : '',
        _react2.default.createElement(
          'div',
          { className: 'listings-page' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'section',
              { id: 'filter-with-btn' },
              this.state.width <= 400 ? _react2.default.createElement(
                'div',
                { className: 'filter-btn', onClick: this.openMenu },
                'Filter'
              ) : _react2.default.createElement(
                'div',
                { id: 'filter' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group price' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Price'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'min-max' },
                    _react2.default.createElement(
                      'select',
                      { name: 'min_price', className: 'min-price',
                        onChange: this.handleChange, value: this.state.min_price },
                      _react2.default.createElement(
                        'option',
                        { value: '0' },
                        '0'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '1000' },
                        '1000'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '5000' },
                        '5000'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '15000' },
                        '15000'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '20000' },
                        '20000'
                      )
                    ),
                    _react2.default.createElement(
                      'select',
                      { name: 'max_price', className: 'max-price',
                        onChange: this.handleChange, value: this.state.max_price },
                      _react2.default.createElement(
                        'option',
                        { value: '10000' },
                        '10000'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '20000' },
                        '20000'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '27000' },
                        '27000'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '35000' },
                        '35000'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '40000' },
                        '40000'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'make-model-comp' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group make' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Make'
                    ),
                    _react2.default.createElement(
                      'select',
                      { name: 'make', className: 'make', id: 'make',
                        onChange: this.handleChange },
                      _react2.default.createElement(
                        'option',
                        { value: 'empty', hidden: true },
                        'Choose make'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'all' },
                        'All'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'nissan' },
                        'Nissan'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'toyota' },
                        'Toyota'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'honda' },
                        'Honda'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group model' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Model'
                    ),
                    _react2.default.createElement(
                      'select',
                      { name: 'model', id: 'model', className: 'model',
                        onChange: this.modelChange },
                      _react2.default.createElement(
                        'option',
                        { value: '0' },
                        'and model'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group button' },
                  _react2.default.createElement(
                    'div',
                    { className: 'primary-btn', onClick: this.submitFilters },
                    'Update'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'reset-btn' },
                    'Reset'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'list-view' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'white-box' },
                _react2.default.createElement(
                  'section',
                  { className: 'change-view' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group view-dropdown' },
                    _react2.default.createElement(
                      'select',
                      { name: 'select_view', className: 'select-view',
                        onChange: this.handleChange, value: this.state.select_view },
                      _react2.default.createElement(
                        'option',
                        { value: 'gallery' },
                        'Gallery View'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'list' },
                        'List View'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'thumb' },
                        'Thumb View'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group sort-dropdown' },
                    _react2.default.createElement(
                      'select',
                      { name: 'sort', className: 'sort-view',
                        onChange: this.handleChange, value: this.state.sort },
                      _react2.default.createElement(
                        'option',
                        { value: 'newest' },
                        'Newest'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'oldest' },
                        'Oldest'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'section',
                  { className: 'all-items' },
                  this.loopItems()
                )
              )
            )
          )
        )
      );
    }
  }]);

  return category;
}(_react.Component);

exports.default = category;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(34);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gallery = function (_Component) {
  _inherits(gallery, _Component);

  function gallery() {
    _classCallCheck(this, gallery);

    var _this = _possibleConstructorReturn(this, (gallery.__proto__ || Object.getPrototypeOf(gallery)).call(this));

    _this.allImgsLoop = function () {
      return _this.state.allImgs.map(function (item, i) {
        return _react2.default.createElement('div', { key: i, onClick: _this.clickedThumb.bind(null, i), className: 'thumb-img', style: {
            "backgroundImage": 'url(\'' + item + '\')'
          } });
      });
    };

    _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.nextBtn = function () {
      if (_this.state.currentIndex != _this.state.allImgs.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.clickedThumb = function (index) {
      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      allImgs: [],
      currentImg: '',
      currentIndex: 0,
      item: []
    };
    return _this;
  }

  _createClass(gallery, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('/api/' + this.props.city + '/' + this.props.category + '/' + this.props.listings + '/' + this.props.item).then(function (response) {
        self.setState({
          item: response.data,
          currentImg: response.data[0].images[self.state.currentIndex],
          allImgs: response.data[0].images
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'gallery' },
        _react2.default.createElement(
          'div',
          { className: 'slider' },
          _react2.default.createElement(
            'div',
            { className: 'main-image' },
            _react2.default.createElement(
              'div',
              { className: 'arrows left-arrow',
                onClick: this.prevBtn },
              _react2.default.createElement('i', { className: 'fas fa-chevron-left' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'arrows right-arrow',
                onClick: this.nextBtn },
              _react2.default.createElement('i', { className: 'fas fa-chevron-right' })
            ),
            _react2.default.createElement('div', { className: 'image-1', style: {
                "backgroundImage": 'url(\'' + this.state.allImgs[this.state.currentIndex] + '\')'
              } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'thumbnails' },
          this.allImgsLoop()
        )
      );
    }
  }]);

  return gallery;
}(_react.Component);

exports.default = gallery;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(8);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _gallery = __webpack_require__(75);

var _gallery2 = _interopRequireDefault(_gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var details = function (_Component) {
  _inherits(details, _Component);

  function details(props) {
    _classCallCheck(this, details);

    var _this = _possibleConstructorReturn(this, (details.__proto__ || Object.getPrototypeOf(details)).call(this, props));

    _this.state = {
      allItems: [],
      item: [],
      itemExtras: [],
      prev: 0,
      prevItem: '',
      nextItem: '',
      newItem: [],
      itemIndex: 0,
      width: document.body.clientWidth
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    return _this;
  }

  _createClass(details, [{
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ width: document.body.clientWidth, height: document.body.clientHeight });
      console.log(this.state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '/' + match.params.item).then(function (response) {
        self.setState({
          item: response.data[0],
          itemExtras: response.data[0].extras
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
      _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + match.params.listings).then(function (response) {
        var newItem = void 0;
        var allItems = response.data;
        newItem = response.data.filter(function (item) {
          return item.extras.vin == match.params.item;
        });
        self.setState({
          allItems: allItems,
          newItem: newItem,
          itemIndex: response.data.indexOf(newItem[0])
        }, function () {
          if (response.data.indexOf(newItem[0]) - 1 >= 0) {
            self.setState({
              prevItem: allItems[response.data.indexOf(newItem[0]) - 1].extras.vin
            });
          }
          if (response.data.indexOf(newItem[0]) + 1 <= allItems.length - 1) {
            self.setState({
              nextItem: allItems[response.data.indexOf(newItem[0]) + 1].extras.vin
            });
          }
        });
        console.log(self.state);
      }).catch(function (error) {
        console.log(error);
      });
      console.log(self.state);
    }
  }, {
    key: 'prevNextBtn',
    value: function prevNextBtn() {
      var _props2 = this.props,
          match = _props2.match,
          history = _props2.history;

      console.log(this.state.prevItem);
      if (this.state.prevItem == '') {
        return _react2.default.createElement(
          'div',
          { className: 'directions' },
          _react2.default.createElement(
            'a',
            { href: '/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '/' + this.state.nextItem, className: 'next' },
            'next'
          )
        );
      } else if (this.state.nextItem == '') {
        return _react2.default.createElement(
          'div',
          { className: 'directions' },
          _react2.default.createElement(
            'a',
            { href: '/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '/' + this.state.prevItem, className: 'next' },
            'prev'
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'directions' },
          _react2.default.createElement(
            'a',
            { href: '/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '/' + this.state.prevItem, className: 'next' },
            'prev'
          ),
          _react2.default.createElement(
            'a',
            { href: '/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '/' + this.state.nextItem, className: 'next' },
            'next'
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          match = _props3.match,
          location = _props3.location,
          history = _props3.history;

      return _react2.default.createElement(
        'div',
        { className: 'details-page' },
        _react2.default.createElement(
          'div',
          { className: 'details-container' },
          _react2.default.createElement(
            'div',
            { className: 'white-box' },
            _react2.default.createElement(
              'section',
              { className: 'sub-menu' },
              _react2.default.createElement(
                'div',
                { className: 'directions' },
                this.prevNextBtn()
              ),
              this.state.width < 1015 ? '' : _react2.default.createElement(
                'nav',
                { className: 'sub-links' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'More Ads by User'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Print'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Share'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Contact Seller'
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'content-area' },
              _react2.default.createElement(
                'div',
                { className: 'media-column' },
                _react2.default.createElement(_gallery2.default, { city: match.params.city, category: match.params.category, listings: match.params.listings, item: match.params.item })
              ),
              _react2.default.createElement(
                'div',
                { className: 'details-column' },
                _react2.default.createElement(
                  'div',
                  { className: 'date' },
                  'Posted: Feb 28th'
                ),
                _react2.default.createElement(
                  'h3',
                  { className: 'title' },
                  this.state.item.title
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'price' },
                  '$',
                  this.state.item.price
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'more-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Vin'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      this.state.itemExtras.vin
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'mileage'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      this.state.itemExtras.miles
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'transmission'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      this.state.itemExtras.transmission
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Description'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    this.state.item.description
                  )
                )
              )
            ),
            this.state.width < 1015 ? _react2.default.createElement(
              'div',
              { id: 'subLinks' },
              _react2.default.createElement(
                'nav',
                { className: 'sub-links' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'More Ads by User'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Print'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Share'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Contact Seller'
                )
              )
            ) : ''
          )
        )
      );
    }
  }]);

  return details;
}(_react.Component);

exports.default = details;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(8);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var home = function (_Component) {
    _inherits(home, _Component);

    function home() {
        _classCallCheck(this, home);

        var _this = _possibleConstructorReturn(this, (home.__proto__ || Object.getPrototypeOf(home)).call(this));

        _this.loopCategories = function () {
            var _this$props = _this.props,
                match = _this$props.match,
                history = _this$props.history;
            //If statement for data

            if (_this.state.categoriesData != '') {
                //return back the loop of categories
                return _this.state.categoriesData.map(function (category, i) {
                    //created a loop for the listings
                    var loopListings = function loopListings() {
                        return category.listings.map(function (listing, index) {
                            return _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/' + match.params.city + '/' + category.title + '/' + listing.slug,
                                    key: index },
                                listing.name
                            );
                        });
                    };
                    return _react2.default.createElement(
                        'div',
                        { key: i, className: 'categories' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' + match.params.city + '/' + category.title, className: 'title' },
                            category.title
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'group-links ' + (category.title == 'jobs' || category.title == 'personals' || category.title == 'housing' ? 'single-col' : '') },
                            loopListings()
                        )
                    );
                });
            } else {
                return 'Loading';
            }
        };

        _this.loopTags = function () {
            var testTag = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j'];
            return testTag.map(function (item, i) {
                return _react2.default.createElement(
                    'div',
                    { key: i, className: 'tag' },
                    ' Apple macbook '
                );
            });
        };

        _this.state = {
            categoriesData: '',
            width: document.body.clientWidth
        };
        _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
        return _this;
    }

    _createClass(home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                match = _props.match,
                history = _props.history;

            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
            if (match.params.city == undefined) {
                history.push('/sanfran');
            };
            var self = this;
            _axios2.default.get('/api/' + match.params.city).then(function (response) {
                self.setState({
                    categoriesData: response.data
                }, function () {
                    console.log(self.state);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'updateWindowDimensions',
        value: function updateWindowDimensions() {
            this.setState({ width: document.body.clientWidth, height: document.body.clientHeight });
            console.log(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                match = _props2.match,
                history = _props2.history;

            var background = {
                backgroundImage: 'linear-gradient(to right, rgba(96, 96, 201, .8) 0%, rgba(176, 54, 217, .8) 100%),\n                url("/img/' + match.params.city + '.jpg")'
            };
            return _react2.default.createElement(
                'div',
                { className: 'home', style: background },
                _react2.default.createElement(
                    'div',
                    { className: 'home-container' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        ' Connecting people',
                        _react2.default.createElement('br', null),
                        ' everywhere : )'
                    ),
                    this.state.width <= 570 ? _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'section',
                            { className: 'trending' },
                            _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search' })
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'links' },
                            this.loopCategories()
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'trending' },
                            _react2.default.createElement(
                                'div',
                                { className: 'title' },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'far fa-clock' },
                                    ' Trending'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'trending-tags' },
                                this.loopTags()
                            )
                        )
                    ) : _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'section',
                            { className: 'links' },
                            this.loopCategories()
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'trending' },
                            _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'title' },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'far fa-clock' },
                                    ' Trending'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'trending-tags' },
                                this.loopTags()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return home;
}(_react.Component);

exports.default = home;

/***/ })

},[70]);