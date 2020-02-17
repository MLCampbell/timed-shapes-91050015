import React, { Component } from 'react'
import './App.css'
import Shape from './Shape/Shape'

class App extends Component {

    render() {
        const multipleShapes = []
        // Shape array = shapes * i
        for(let i = 0; i < 60; i++) { 
            multipleShapes.push(<Shape/>)
        }

        return (
            <div>
            {multipleShapes}
            </div>
        )
    }
}
export default App;
