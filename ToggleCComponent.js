import React, { Component } from 'react';
import './Toggle.css'



//Class component
class ToggleCComponent extends Component {

    //initially state value is false 
    state = {
        isActive: false
    }


    //a handleToggle function will call when we click on button 
    //by default we have set false , so initialy app class will not add 
    //once user click on button then handleToggle funcion will call and ! operator will 
    //convert our state value to true 
    //If the boolean value is true class name is added to the react element.
    //If the boolean value is false class name is removed from the react element.

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        //we have used javascript ternary operator to check if current state is having true or false value 
        //based on that below element will show in window 
        //created isActive another variable for storing state isActive key value 
        const isActive = this.state.isActive;
        return (
            <div className={isActive ? "app" : null}>
                <h1>Hello react</h1>
                <button onClick={this.handleToggle}>Toggle Class</button>
            </div>
        )
    }


}


export default ToggleCComponent;