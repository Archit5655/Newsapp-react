import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  article=[
    
  ]
  constructor()
  {
    super();
    this.state={
      articles: [],
      loading: false,
      page:1

    }
  } 

 async componentDidMount(){

    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=35372acba3514e699984556e17081ce5"
    let data=await fetch(url);
    let parseddata= await data.json()
    console.log(parseddata);
    this.setState({articles: parseddata.articles})


  }
  previouspage= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=35372acba3514e699984556e17081ce5&page=${this.state.page-1}`
    let data=await fetch(url);
    let parseddata= await data.json()
    console.log(parseddata);
    this.setState({articles: parseddata.articles})


    this.setState({
      page: this.state.page+-1,
      article: parseddata.articles

    })


  }
  nextpage= async()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=35372acba3514e699984556e17081ce5&page=${this.state.page+1}`
    let data=await fetch(url);
    let parseddata= await data.json()
    console.log(parseddata);
    this.setState({articles: parseddata.articles})


    this.setState({
      page: this.state.page+1,
      article: parseddata.articles

    })

  }

  render() {
    return (
      <div className="container my-3">
        <h2>Everyday-News</h2>
        <div className="row" >
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url} >
           <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
   
             </div>
        })}

          
       
         
      
        </div>
        <div className="container d-flex justify-content-between" >
        <button disabled={this.state.page<=1} type="button"  className="btn btn-dark" onClick={this.previouspage}> &larr; previous </button >
        <button disabled={this.state.page>=2} type="button" className="btn btn-dark " onClick={this.nextpage}> Next &rarr;</button>


        </div>

      
      </div>
    );
  }
}

export default News;
