import React, { Component } from "react";

class Character extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h3 className="text-center">Character</h3>
                <div className="character w-100 h-100 ml-5">
                    <div className="element-character">
                        <img src="/img/character_1.png" width=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Character