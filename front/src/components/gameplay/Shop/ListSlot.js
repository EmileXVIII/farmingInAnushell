import React, { Component } from "react";
import SlotObjet1 from './SlotObjet1';
import SlotObjet2 from './SlotObjet2';
import SlotObjet3 from './SlotObjet3';
import SlotObjet4 from './SlotObjet4';
import SlotObjet5 from './SlotObjet5';
import SlotObjet6 from './SlotObjet6';

class ListSlot extends Component {

    render() {
        return (
            <div id="list-object" className="list-object">
                <SlotObjet1 buyItem={(cost, name) => this.props.buyItem(cost, name)} checkIfBuyable={(cost) => { return this.props.checkIfBuyable(cost) }} />
                <SlotObjet2 buyItem={(cost, name) => this.props.buyItem(cost, name)} checkIfBuyable={(cost) => { return this.props.checkIfBuyable(cost) }} />
                <SlotObjet3 buyItem={(cost, name) => this.props.buyItem(cost, name)} checkIfBuyable={(cost) => { return this.props.checkIfBuyable(cost) }} />
                <SlotObjet4 buyItem={(cost, name) => this.props.buyItem(cost, name)} checkIfBuyable={(cost) => { return this.props.checkIfBuyable(cost) }} />
                <SlotObjet5 buyItem={(cost, name) => this.props.buyItem(cost, name)} checkIfBuyable={(cost) => { return this.props.checkIfBuyable(cost) }} />
                <SlotObjet6 buyItem={(cost, name) => this.props.buyItem(cost, name)} checkIfBuyable={(cost) => { return this.props.checkIfBuyable(cost) }} />
            </div>
        )
    }
}

export default ListSlot