import React, { Component } from "react";
import SlotObjet from './SlotObjet';

class ListSlot extends Component {
   state = {
       slotObject: <SlotObjet buyItem={(cost, name) => this.props.buyItem(cost, name)} checkIfBuyable={(cost) => this.props.checkIfBuyable(cost)}/>
   }

    render() {
        return (
            <div id="list-object" className="list-object">
                {this.state.slotObject}
                {this.state.slotObject}
                {this.state.slotObject}
                {this.state.slotObject}
                {this.state.slotObject}
                {this.state.slotObject}
            </div>
        )
    }
}

export default ListSlot