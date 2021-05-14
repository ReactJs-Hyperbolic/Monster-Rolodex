import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredSearch = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='Search Monsters'
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredSearch} />
      </div>
    );
  }
}

export default App;
