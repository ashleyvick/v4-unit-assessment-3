import React, {Component} from 'react';

class Searchbar extends Component { 
    constructor (){
        super();
        this.state = {
        input: ''
        };
    }

    handleChange = (value) => {
        this.setState({input: value})
    }

    handleClick = (value) => {
        this.setState({})
    }

    render(){
        return(
            <div>
                <input
                onChange={(e)=>this.handleChange(e.target.value)}
                placeholder="Search" ></input>
                <button onClick={()=>this.props.filterBooks(this.state.input)}>Search</button>

                
            </div>
        )
    }
}

export default Searchbar;
