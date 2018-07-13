import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Main from './components/Main/index'

import API from './lib/API'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: []
    };
  }

  async componentDidMount() {
    const dogs = await API.getAll();
    console.log(dogs);
    this.setState({
      dogs
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Main dogs={this.state.dogs}
        />
      </div>
    );
  }
}

export default App;


