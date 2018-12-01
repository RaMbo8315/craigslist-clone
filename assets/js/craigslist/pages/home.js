import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class home extends Component {
    constructor() {
        super()
        this.state = {
            categoriesData: '',
            width: document.body.clientWidth,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        const {match, history} = this.props;
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        if (match.params.city == undefined) {
            history.push('/sanfran')
        };
        const self = this;
        axios.get(`/api/${match.params.city}`)
            .then(function (response) {
                self.setState({
                    categoriesData: response.data
                }, () => {
                    console.log(self.state);
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

    loopCategories = () => {
        const { match, history } = this.props;
        //If statement for data
        if (this.state.categoriesData != '') {
            //return back the loop of categories
            return this.state.categoriesData.map((category, i) => {
                //created a loop for the listings
                const loopListings = () => {
                    return category.listings.map((listing, index) => {
                        return (
                            <Link to={`/${match.params.city}/${category.title}/${listing.slug}`}
                                key={index}>{listing.name}</Link>
                        )
                    })
                }
                return (
                    <div key={i} className={'categories'}>
                        <Link to={`/${match.params.city}/${category.title}`} className={'title'}>{category.title}</Link>
                        <div className={`group-links ${(category.title == 'jobs' || category.title == 'personals' || category.title == 'housing'
                        ) ? 'single-col' : ''}`}>
                            {loopListings()}
                        </div>
                    </div>
                )
            })
        } else {
            return 'Loading'
        }
    }

    loopTags = () => {
        let testTag = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j'];
        return testTag.map((item, i) => <div key={i} className={'tag'}> Apple macbook </div>
        )
    }

    render() {
        const { match, history } = this.props;
        const background = {
            backgroundImage: `linear-gradient(to right, rgba(96, 96, 201, .8) 0%, rgba(176, 54, 217, .8) 100%),
                url("/img/${match.params.city}.jpg")`
        }
        return (
            <div className={'home'} style={background}>
                <div className={'home-container'}>
                    <h1> Connecting people<br /> everywhere : )</h1>
                    {(this.state.width <= 570) ?
                        <div>
                            <section className={'trending'}>
                                <input type='text' name='search' className={'search'} />
                            </section>
                            <section className={'links'}>
                                {this.loopCategories()}
                            </section>
                            <section className={'trending'}>
                                <div className={'title'}>
                                    <i className={'far fa-clock'}> Trending</i>
                                </div>
                                <div className={'trending-tags'}>
                                    {this.loopTags()}
                                </div>
                            </section>
                        </div> 
                        :
                        <div>
                            <section className={'links'}>
                                {this.loopCategories()}
                            </section>
                            <section className={'trending'}>
                                <input type='text' name='search' className={'search'} />
                                <div className={'title'}>
                                    <i className={'far fa-clock'}> Trending</i>
                                </div>
                                <div className={'trending-tags'}>
                                    {this.loopTags()}
                                </div>
                            </section>
                        </div>
                    }
                </div>
            </div>
        )
    }
}