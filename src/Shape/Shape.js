import React, { Component } from 'react';
import './Shape.css'
import '../Container/Container.css'

class Shape extends Component {

    colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373",
        "#FF8552", "#A40E4C"]
        
    state = {
        bgColor: this.colors[(Math.floor(Math.random() * this.colors.length))],
        size: (Math.floor(Math.random() * 125)),
        perCent: (Math.floor(Math.random() * 100))
    }

    render() {

        return (
            <div className="container" style={Object.assign(
                { height: this.state.size },
                { width: this.state.size })
            }>
                <div className="shape" style={Object.assign(
                    { backgroundColor: this.state.bgColor },
                    { borderRadius: this.state.perCent })
                }>
                </div>
            </div>
        )
    }
    interval = setInterval(() => {
        this.setState(
            {
                size: (Math.floor(Math.random() * 125)),
                bgColor: this.colors[(Math.floor(Math.random() * this.colors.length))],
                perCent: (Math.floor(Math.random() * 100))
            })
    }, 4000)
}

export default Shape;

