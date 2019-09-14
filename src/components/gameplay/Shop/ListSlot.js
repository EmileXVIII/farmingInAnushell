import React, { Component } from "react";
import SlotObjet from './SlotObjet';

class ListSlot extends Component {
    constructor() {
        super()
        this.list = ""
    }

    render() {
        return (
            <div id="list-object" className="list-object">
                <SlotObjet />
                <SlotObjet />
                <SlotObjet />
                <SlotObjet />
                <SlotObjet />
                <SlotObjet />
            </div>
        )
    }
}

export default ListSlot