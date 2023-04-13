import React, { Component } from "react";
import '../Roleta.css'

class Roleta extends Component {

    render() {
        const { array, circle } = this.props;
        return (
            <div>
                <div className="arrow" />
                <ul className={circle}>
                    {
                        array.map((element, index) => (
                            <li
                                className='text'
                                key={index}
                                style={{
                                    backgroundColor: 'pink',
                                }}
                            >
                                {element}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Roleta;