import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

  state = {
    monsters: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
    .catch(error => console.log(error));
  }


  render() {
    console.log('monsters', this.state.monsters);

    const { monsters } = this.state;

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
