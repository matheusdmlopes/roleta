import React, { Component } from "react";

class Roleta extends Component {

    render() {
        const { array } = this.props;
        return (
            <ul>
                {
                    array.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))
                }
            </ul>
        )
    }
}

export default Roleta;