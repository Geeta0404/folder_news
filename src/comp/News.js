import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// import PropTypes, { string } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {

  const [articles, setArticles]=useState([])
  const [loading, setLoading]=useState(true)
  const [page, setPage]=useState(1)
  const [totalResult, setTotalResult] = useState(0);
  
  
  const capitalFirst = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  

const updateNews = async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    let data=  await fetch(url);
    props.setProgress(40);
    let parsedData= await data.json();
    props.setProgress(80);
    // console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResult(parsedData.totalResult)
    setLoading(false)
    
    props.setProgress(100);
    
  }

  
  useEffect(() => {
    document.title= `${capitalFirst(props.category)} - NewsMonkey`;
    updateNews();
    
  }, []);


   

 const fetchMoreData = async() => {

   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
  let data=  await fetch(url);
  let parsedData= await data.json();
  // console.log(parsedData);
  setArticles(articles.concat(parsedData.articles))
  setTotalResult(parsedData.totalResults)
  // setLoading(false)
 
 }

  
    return (
      <>
        <div className="container pt-5 my-3">
          <h2 className='text-center my-5'>NewsMoonkey Top {capitalFirst(props.category)} Headlines  </h2>
          {loading && <Spinner />}

            <InfiniteScroll  dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResult} loader={<Spinner />}>

        <div className="container">
          <div className="row g-3">
            {articles.map((element) => (

              <div className="col-md-4" key={element.url}>
              <NewsItem 
              title={element.title.length > 45 ? element.title.slice(0, 45) + "..." : element.title || ""}
              description={element.description && element.description.length > 88 ? element.description.slice(0, 88) + "..." : element.description || ""}
              imageUrl={element.urlToImage}
              url={element.url}
              author={element.author}
              publishedAt={element.publishedAt}
              source={element.source.name}
            />
              </div>
            ))}
          </div>
          </div>

          </InfiniteScroll>

       
        </div>
      </>
    );
  
}


// News.defaultProps={
//   category:"science",
//   country:"us",
//   pageSize:6,
// }
// News.propTypes={
//   category:PropTypes.string,
//   country:PropTypes.string,
//   pageSize:PropTypes.number
// }
export default News;
