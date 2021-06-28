import React, { Component } from "react";

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChange = (value) => {
    this.setState({ input: value });
  };

  handleClick = (value) => {
    this.setState({});
  };

  render() {
    return (
      <div className="search">
        <input
          onChange={(e) => this.handleChange(e.target.value)}
          placeholder="Search"
        ></input>
        <button onClick={() => this.props.filterbooks()}>Search</button>
        <button onClick={() => this.props.clearSearch()} id="search-clear">
          Clear Search
        </button>
      </div>
    );
  }
}

export default Searchbar;
