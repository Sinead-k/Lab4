import React from 'react';
import{ Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component{

    state = {
        // here we enter our json information
        movies: [ ]
    };

    componentDidMount(){
            axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                this.setState({ movies: response.data.Search })
            })
            .catch();
    }

    render(){
        return(
            <div>
                <h1><i>Movie List</i></h1>
                <br></br>
                
                {/* Movie Component embedded into the Read Component */}
                {/* Curly Brackets used to embed JavaScript */}
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}