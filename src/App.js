import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { tweets: [], loading: true }

  componentDidMount() {
    setTimeout(() => {
      fetch('tweets.json')
        .then(res => {
          res.json().then(data => {
            this.setState({ tweets: data.tweets, loading: false })
          })
        }).catch(err => console.log(err))
    }, 2000)
  }

  render() {
    if (this.state.loading) {
      return (
        <div id="TweetStream">
          <div className="loading-indicator">
            <div/>
          </div>
        </div>
      )
    }
    return (
      <div id="TweetStream">
        {
          this.state.tweets.map(tweet => {
            return (
              <div className="tweet" key={tweet.id}>
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
          })
        }
      </div>
    );
  }
}

export default App;
