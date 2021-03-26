import React, {Component} from 'react';

class Booklist extends Component { 
    constructor (){
        super();
        this.state = {
        };
    }

    render(){
        const mappedBooks = this.props.books.map((elem) => {
            return ( 
            <div>
                <img src={elem.img} onClick={() => this.props.addToShelf(elem.title)}></img> 
                <h1>{elem.title}</h1>
                <h2>{elem.author}</h2>
            </div>)
        })
        return(
            <div>
                <span className="booklist">{mappedBooks}</span>

                
            </div>
        )
    }
}

export default Booklist;
