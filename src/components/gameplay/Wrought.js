import React, { Component } from "react";

class Wrought extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="wrought-content">
                <h3 className="text-center">Wrought</h3>
                <img className="forge" src="https://media.forgecdn.net/avatars/25/691/635777961331573750.png"></img>
                <div className="carre"></div>
                <button type="button" class="btn btn-danger"> Améliorer </button>

            </div>

        )
    }
}

export default Wrought