import React from 'react';

const NewsItem =(props)=> {

    let { title, description, imageUrl, url, author, publishedAt , source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', position: 'absolute', right: 0,top: -10}}>
            <span className="badge rounded-pill bg-danger"> {source}</span>
            </div>
           <img src={imageUrl ? imageUrl : "https://cdn.arstechnica.net/wp-content/uploads/2024/03/hubble1CROP-1152x648.jpg"}  style={{ width: "100%", height: "250px" }} className="card-img-top" alt="..."          />
          <div className="card-body">
            <a href={url}><h5 className="card-title" style={{ color: '#021545' }}>{title} </h5></a>
            <p> By {author ? author : "Geeta"} On {new Date(publishedAt).toGMTString()}</p>
            <p className="card-text">{description ? description : "[Removed]"}</p>
            <a href={url} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
