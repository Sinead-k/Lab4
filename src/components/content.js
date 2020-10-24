import React from 'react';
import {Jumbotron} from 'react-bootstrap';

export class Content extends React.Component{
    render(){
        return(
            <div>
                {/* Jumbotron is a bootstrap component */}
                {/* Acts as a container around elements */}
                <Jumbotron>
                    <h1>It is {new Date().toLocaleTimeString()}.</h1>
                    <p>Or you could have looked at the time on your device?</p>
                </Jumbotron>
            </div>
        );
    }
}