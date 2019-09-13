import React, { Component } from "react";
import SlotObjet from './SlotObjet';

class ListSlot extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div id="list-objet" className="list-objet">
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