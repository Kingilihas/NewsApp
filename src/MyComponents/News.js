import React, { Component } from 'react'
import NewsItem from './newsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import dImage from './Images/dImage.png';


export class News extends Component {



  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'



  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,


  }
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0


    }

    document.title = `NewsMonkey-${this.capitalizeFirstLetter(this.props.category)}`;

  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount(e) {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)

    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });

    this.props.setProgress(100)



  }

  // prevClick = async () => {

  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=662734c4983b4a2d857f388f21707dc5&page=${this.state.page - 11}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true })
  //   let data = await fetch(url);

  //   let parsedData = await data.json();


  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page - 1,
  //     loading: false
  //   });

  // }

  // nextClick = async () => {

  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

  //   }
  //   else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=662734c4983b4a2d857f388f21707dc5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true })
  //     let data = await fetch(url);

  //     let parsedData = await data.json();


  //     this.setState({
  //       articles: parsedData.articles,
  //       page: this.state.page + 1,
  //       loading: false
  //     });
  //   }

  // }

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);

    let parsedData = await data.json();


    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      loading: false
    });

  };

  render() {


    return (
      <div className="container my-3">
        <h2 className='text-center ' style={{ marginTop: "80px" }} >newsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">


            <div className="row">

              {/*{!this.state.loading &&}*/ this.state.articles.map((element) => {

                {
                  // consloe


                  return <div className="col-md-4" key={element.url}  >
                    <NewsItem cardStyle={this.state.cardStyle} title={element.title ? element.title : "No Title"} description={element.description ? element.description : "No description provided "} Imageurl={element.urlToImage ? element.urlToImage : dImage} newsUrl={element.url} mode={this.state.mode} modeText={this.state.modeText} author={element.author ? element.author : "Unknown"} date={element.publishedAt}
                      source={element.source.name} />
                  </div>

                }

              })}


            </div>

          </div>

        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>

          </div> */}



      </div>
    )
  }
}

export default News
