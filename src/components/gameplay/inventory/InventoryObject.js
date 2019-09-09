
import React, { Component } from "react";
import { gestionnaireEvents } from "./inventoryEvents";
import Filter from "./Filter";
class InventoryObject extends Component {
    constructor(props) {
        super()
        this.state={
            rarity:undefined,
            object:undefined,
            urlIcon:undefined
        };
        this.props=props
        this.changeObject=this.changeObject.bind(this);
        this.deleateObject=this.deleateObject.bind(this);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-changeObject`,this.changeObject);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-deleateObject`,this.deleateObject)
    }
    changeObject(newObject){
        this.setState((prevState)=>({object:this.state.object=newObject, rarity:newObject.rarity, urlIcon:newObject.iconAdresse}))
    }
    deleateObject(){
        this.setState((prevState)=>({object:this.state.object=undefined, rarity:undefined, urlIcon:undefined}))
    }
    render(){
        return(
            <div className={this.props.className} numKey={this.props.numKey}>
                <div className='icon_objet' urlIcon={this.state.urlIcon}/>
                <Filter rarity={this.state.rarity} numKey={this.props.numKey} conteneurName={this.props.conteneurName}/>
            </div>
        )
    }
}
export default InventoryObject;