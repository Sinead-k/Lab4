import React from 'react';
// Remember to import bootsrap elements!
import {Card} from 'react-bootstrap';

export class MovieItem extends React.Component{
    render(){
        return(
            <div>

                {/* Bootstrap Card code */}
                {/* I also tried to center the cards a couple of ways but couldn't fix this */}

                <Card style={{ width: '18rem' ,position: 'relative', left:'auto', right:'auto'}}>
                    <Card.Img variant="bottom" src={this.props.movie.Poster} />
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