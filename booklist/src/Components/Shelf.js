import React, {Component} from 'react';

class Shelf extends Component { 
    constructor (){
        super();
        this.state = {

        };
    }


    render(){
        console.log(this.props)
        const mappedTitles = this.props.shelf.map((elem)=> {
            return (
                <div>
                    <h1>{elem.title}</h1>
                </div>
            )
        })

        return(
            <div className="Your Shelf">
                <h1>Your Shelf</h1>
                <h1 className = "mappedTitles">{mappedTitles}</h1>
                
            </div>
        )
    }
}

export default Shelf;
