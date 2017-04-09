import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet'

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

  handleHideTweet(id) {
    const newTweets = this.state.tweets.filter(tweet => {
      return tweet.id !== id
    })
    this.setState({ tweets: newTweets })
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
              <Tweet tweet={tweet} key={tweet.id} onHideTweet={this.handleHideTweet.bind(this, tweet.id)}/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
