import React, { Component } from 'react'

export class newsItem extends Component {
  render() {
    let { title, description, Imageurl, newsUrl, date,author,source, } = this.props

    return (
     
      <div>
        <div className="card my-3 p-2"> 
          <img src={Imageurl} className="card-img-top" alt="./pop.png" />
          <div className="card-body">
          <h6> <span className="badge bg-danger">{source}</span></h6>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>

            <a href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read more</a>
          
          </div>
        </div>
      </div>
    )
  }
}

export default newsItem
