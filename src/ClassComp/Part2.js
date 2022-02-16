import React, { Component } from 'react'

class Student extends Component {
    state = {
        name: "tabish",
        arr: [1, 2, 3, 4, 5]
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>

                <ul>
                    {
                    this.state.arr.map(el => (<li> {el} </li>))
                    }
                </ul>
            </div>
        )
    }
}

export default Student;