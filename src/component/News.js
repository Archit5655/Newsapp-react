import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=>{
  const[article,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  document.title= `${props.category} -  Related News`

 
 
  
const  updateNews= async ()=>{
    props.setProgress(10);
    const url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
  
  let data = await fetch(url);
  props.setProgress(30);
  let parseddata = await data.json();
  console.log(parseddata);
  props.setProgress(70);
  setArticles(parseddata.articles)
  setLoading(false)
  settotalResults(parseddata.totalResult)
  
props.setProgress(100);
  }
useEffect(() => {
  
  updateNews()

 
}, [])

  

 const fetchMoreData = async() => {
   const url =
   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
 setLoading(true)
let data = await fetch(url);
let parseddata = await data.json();
console.log(parseddata);
setArticles(article.concat(parseddata.articles))
settotalResults(parseddata.totalResult)

  

  };

 
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>Everyday-News Top Headlines On {props.category} category</h1>
      
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!=totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            
         
        <div className="row">
          { article.map((element) => {
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

 News.defsaultprops={
  country:'in',
  pageSize:5,
  category:'general'
}
 News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string,


}

export default News;
