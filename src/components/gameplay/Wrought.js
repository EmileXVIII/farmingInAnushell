import React, { Component } from "react";

class Wrought extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div className="wrought-content border text-center">
                <h3 className="text-center">Wrought</h3>
                <img alt="wrought-icon" className="forge" src="https://media.forgecdn.net/avatars/25/691/635777961331573750.png"></img>
                <div className="carre"></div>
                <div className="forge-buttton text-center pb-5">
                    <button type="button" class="btn btn-danger"> Améliorer </button>
                </div>
            </div>
        )
    }
}

export default Wrought