import React from 'react';
// Remember to import bootsrap elements!
import {Card} from 'react-bootstrap';

export class MovieItem extends React.Component{
    render(){
        return(
            <div>
                {/* Bootstrap Card code */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.movie.Poster} />
                <Card.Body>
                    <Card.Title>{this.props.movie.Title}</Card.Title>
                    <Card.Text>{this.props.movie.Year}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
            </div>
        );
    }
}