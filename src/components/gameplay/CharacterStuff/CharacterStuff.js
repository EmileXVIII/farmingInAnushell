import React, { Component } from "react";

class CharacterStuff extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="Character">
                <h3 className="text-center">Character</h3>
                <div class="character">
                    <div className="list-objet">
                        <div className="objet"></div>
                        <div className="objet"></div>
                        <div className="objet"></div>
                    </div>
                    <div class="clear"></div>
                    <div class="element-character"></div>
                    <div className="list-objet">
                        <div className="objet"></div>
                        <div className="objet"></div>
                        <div className="objet"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterStuff