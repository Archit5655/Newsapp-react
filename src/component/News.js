import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



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
      loading: false,
      page: 1,
    };
    document.title= `${this.props.category} -  Related News`
  }  
  async updateNews(){
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ece2eea7b4b4adcb91a3fd5308067b8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
  let data = await fetch(url);
  let parseddata = await data.json();
  console.log(parseddata);
  this.setState({ articles: parseddata.articles,
  loading:false ,
});
  }

  async componentDidMount() {
 this.updateNews()
  };
  
  previouspage = async () => {
  
    this.setState({page:this.state.page-1})
    this.updateNews()
  };
  nextpage = async () => {
  
    this.setState({page:this.state.page+1}) 
    this.updateNews()
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Everyday-News Top Headlines On {this.props.category} category</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previouspage}
          >
            {" "}
            &larr; previous{" "}
          </button>
          <button
            disabled={this.state.page >= 8}
            type="button"
            className="btn btn-dark "
            onClick={this.nextpage}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
