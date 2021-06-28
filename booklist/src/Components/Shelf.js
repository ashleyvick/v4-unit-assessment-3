import React, { Component } from "react";

class Shelf extends Component {
  render() {
    const { shelf, removeFromShelf, clearShelf } = this.props;

    const shelfBooks = shelf.map((book) => {
      return (
        <div className="book" key={book.id}>
          <img src={book.img} alt="" onClick={() => removeFromShelf(book)} />
          <span className="title">{book.title}</span>
          <span className="author">{book.author}</span>
        </div>
      );
    });
    return (
      <div className="shelf-container">
        <h3 id="shelf-header">Your Shelf:</h3>
        <button id="shelf-clear" onClick={() => clearShelf()}>
          Clear Shelf
        </button>
        <div className="shelf-display">{shelfBooks}</div>
      </div>
    );
  }
}

export default Shelf;
