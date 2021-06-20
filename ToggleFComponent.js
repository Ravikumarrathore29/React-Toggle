import React, { useState } from 'react';

//Imported css file in our js file 
import './Toggle.css'; 

//functional component
export default function ToggleFComponent() {

    //useState is a Hook that lets us add React state to function components
    //It returns a pair of values: the current state(isActive) and a function (setActive) that updates it
    const [isActive, setActive] = useState("false");

    //a handleToggle function will call when we click on button 
    const handleToggle = () => {

        //by default we have set false , so initialy app class will not add 
        //once user click on button then handleToggle funcion will call and ! operator will 
        //convert our state value to true 
        //If the boolean value is true class name is added to the react element.
        //If the boolean value is false class name is removed from the react element.
        setActive(!isActive); 
    };

    return (
        //we have used javascript ternary operator to check if current state is having true or false value 
        //based on that below element will show in window 
        <div className={isActive ? "app" : null}>
            <h1>Hello react</h1>
            <button onClick={handleToggle}>Toggle Class</button>
        </div>
    )
}
