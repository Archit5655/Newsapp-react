import React, { Component } from "react";

const Newsitem= (props)=>{
  


    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:'flex',
          justifyContent: 'flex-end',
          position:'absolute',
          right:'0'
      }}>
          <span className=" badge rounded-pill bg-danger">
                {source}
              </span>
          </div>
     
          <img
            src={
              imageUrl
                ? imageUrl
                : "data:image/jpeg;base64,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"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              {title}{" "}
              
              ....
            </h5>
            <p className="card-text">{description}....</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreference"
              href={newsUrl}
              target="_blank"
              className=" btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
