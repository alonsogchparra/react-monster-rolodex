import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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

  onSearchMonster = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }


  render() {
    console.log('monsters', this.state.monsters);

    const { monsters, searchField } = this.state;
    const searchFieldFiltered = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchMonster}/>
        <CardList monsters={searchFieldFiltered} />
      </div>
    );
  }
}

export default App;
