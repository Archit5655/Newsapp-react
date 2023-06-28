import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defsaultprops={
    country:'in',
    pageSize:5,
    category:'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,


  }
  article = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult:0,
    };
    document.title= `${this.props.category} -  Related News`
  }  
  async updateNews(){
    this.props.setProgress(10);
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  
  let data = await fetch(url);
  this.props.setProgress(30);
  let parseddata = await data.json();
  console.log(parseddata);
  this.props.setProgress(70);
  this.setState({ articles: parseddata.articles,
  loading:false ,
  totalResult: parseddata.totalResult,
});
this.props.setProgress(100);
  }

  async componentDidMount() {
 this.updateNews()
  };
  

  fetchMoreData = async() => {
  this.setState({page: this.state.page+1})
  const url =
  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
let data = await fetch(url);
let parseddata = await data.json();
console.log(parseddata);
this.setState({ articles: this.state.articles.concat(parseddata.articles),
loading:true ,
totalResult: parseddata.totalResult,
})
  

  };

  render() {
    return (
      <>
        <h1 className="text-center">Everyday-News Top Headlines On {this.props.category} category</h1>
      
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResult}
          loader={<Spinner/>}
        >
          <div className="container">
            
         
        <div className="row">
          { this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
               
              
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
      
                  </>
     
    );
  }
}

export default News;
