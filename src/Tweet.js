import React, {Component} from 'react'

export default class Tweet extends Component{
  render() {
    const {
      tweet,
      onHideTweet
    } = this.props
    return ( 
      <div className="tweet" key={tweet.id}>
        <button className="hide" onClick={onHideTweet}>Hide</button>
        <img className="profile" alt="Profile" src={tweet.profile_pic_url} />
        <div className="tweet-body">
          <div className="name-fields">
            <h1>{tweet.full_name}</h1>
            <h2>@{tweet.username}</h2>
          </div>
          <p>{tweet.text}</p>
          <img className="attached" src={tweet.attached_image} alt="Attached" />
        </div>
      </div>
    )
  }
}
