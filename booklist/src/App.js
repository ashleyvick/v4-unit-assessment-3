import React, {Component} from 'react';
import Header from './Components/Header';
import Booklist from './Components/Booklist';
import Searchbar from './Components/Searchbar';
import Shelf from './Components/Shelf'
import './App.css';
import data from './data';

class App extends Component {
  constructor(){
    super ();
    this.state = {
      books: data,
      shelf: [],
    };
  }

  addToShelf = (title) => {
    this.setState({
      shelf: [...this.state.shelf, title]
    });
  }

  // filterBooks = (value) => {
  //   this.setState({
  //     list: [...this.state.data],
  //     input: ''
  //   });
  // }

  

  render(){
    return(
      <div> 
        <Header/>
        {/* <Searchbar filterBooks={this.filterBooks}/> */}
      <div className="Components">
        <Booklist books={this.state.books} addToShelf={this.addToShelf}/>
        <Shelf shelf={this.state.shelf}/>
      </div>

      </div>
    )
  }
}

export default App;