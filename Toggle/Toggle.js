import React, { useState } from 'react';
import './Toggle.css';



export default function App() {
    const [isActive, setActive] = useState();

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className={isActive ? "app" : null}>
            <h1>Hello react</h1>
            <button onClick={handleToggle}>Toggle Class</button>
        </div>
    )
}
