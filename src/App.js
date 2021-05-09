import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Play from './components/play';
import Rules from './components/rules';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showRules: false,
      score: sessionStorage.getItem('score')
        ? parseInt(sessionStorage.getItem('score'))
        : 0
    };
  }

  render() {
    const handleScore = lose => {
      if (!lose) {
        sessionStorage.setItem('score', this.state.score + 1);
        this.setState({ score: this.state.score + 1 });
      } else if (this.state.score > 0) {
        sessionStorage.setItem('score', this.state.score - 1);
        this.setState({ score: this.state.score - 1 });
      }
    };

    const toggleRules = () => {
      this.setState({ ...this.state, showRules: !this.state.showRules });
    };

    return (
      <>
        <Header score={this.state.score} />
        <Play handleScore={handleScore} />
        {this.state.showRules ? (
          <Rules toggleRules={toggleRules} />
        ) : (
          <button type="button" onClick={toggleRules} className="toggle-rules">
            rules
          </button>
        )}
      </>
    );
  }
}
