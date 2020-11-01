import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Create extends React.Component{

    constructor(){
        // invoke constructor for parent class
        super();

this.onSubmit = this.onSubmit.bind(this);
this.onChangeTitle = this.onChangeTitle.bind(this);
this.onChangeYear = this.onChangeYear.bind(this);
this.onChangePoster = this.onChangePoster.bind(this);


        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }
    // Important to invoke methods
    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    // When method is envoked, it will pull the 
    // information from the form and display it in an alert
    onSubmit(e){
        // stops button from being pushed multiple times
        e.preventDefault();
        // displays inputs as alert
        alert("Movie: " + this.state.Title + " Year: " + this.state.Year + " Poster: " + this.state.Poster);
    }

    render(){
        return(
            <div className='App'>
                <h1><i>Add New Movie</i></h1>
                <br></br>

                {/* when submitted it will envoke onSubmit method */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Please Add Movie Title: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <label> Please Add Year Of Release: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>

                    <div className="form-group">
                        <label>Link Movie Poster URL: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}   
                        onChange={this.onChangePoster}></textarea>     
                      </div>

                    <div className='form-group'>
                        <input type='submit'
                        value='Add Movie'
                        // You can style elements using bootstrap
                        className='btn btn-dark'></input>
                    </div>
                </form>
            </div>
        );
    }
}