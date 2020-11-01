import React from 'react';
// Remember to import bootsrap elements!
import {Card} from 'react-bootstrap';

export class MovieItem extends React.Component{
    render(){
        return(
            <div>

                {/* Bootstrap Card code */}
                {/* I also tried to center the cards a couple of ways but couldn't fix this */}
                <div>
                    {/* I also changed the code so the cards where centered */}
                    <Card style={{ width: '18rem', margin: '0 auto'}}>
                        <Card.Img variant="bottom" src={this.props.movie.Poster} />
                        <Card.Body>
                            <Card.Title>{this.props.movie.Title}</Card.Title>
                            <Card.Text>{this.props.movie.Year}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        );
    }
}