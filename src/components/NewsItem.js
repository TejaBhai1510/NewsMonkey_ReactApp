import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a target="_blank" href={newsUrl} className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

// Default image if imgUrl is Null:
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-videos%2Fnews-background&psig=AOvVaw3FidrHtcCcvX7AuL0mSL3h&ust=1707486343121000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODAh7nwm4QDFQAAAAAdAAAAABAE