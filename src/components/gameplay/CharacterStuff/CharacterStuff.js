import React, { Component } from "react";

let style = {
    backgroundColor: ''
}

// Get rarety/color association
let RARITY = {
    'Common': 'white',
    'Uncommon': 'green',
    'Rare': 'blue',
    'Epic': 'purple',
    'Legendary': 'goldenrod'
}


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}



class CharacterStuff extends Component {
    constructor() {
        super()
        this.state = {
            item: {}
        }
    }

    render() {
        return (
            <div id="Character">
                <h3 className="text-center">Character</h3>
                <div class="character">
                    <div className="row">
                        {/* map arrayItem in GamePage*/}
                        {this.props.items.map((item) =>
                            <img
                                onClick={() => this.setState({ item: item })}
                                //style={style}
                                title={item.infos.name}
                                data-toggle="tooltip"
                                data-placement="top"
                                className="onHover mx-3 my-3 border"
                                width="75"
                                alt="item-icon"
                                src={item.infos.iconAdresse}
                                key={item.infos.id}
                            />
                        )}
                    </div>
                    <div className="row d-flex justify-content-around">
                        <div className="focus-item-character mt-3 text-center">
                            <div className="container text-center">
                                {(() => {
                                    if (isEmpty(this.state.item)) {
                                        return (
                                            <p>
                                                Please select an item
                                            </p>
                                        )
                                    } else {
                                        let item = this.state.item
                                        style = {
                                            backgroundColor: RARITY[item.infos.rarity]
                                        }
                                        return (
                                            <div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img style={style} className="rounded" width="120" src={item.infos.iconAdresse} />
                                                    </div>
                                                    <div className="col-8">
                                                        <b>{item.infos.name}</b>
                                                        <p>({item.infos.rarity})</p>
                                                        <p>Life : {item.life}</p>
                                                        <p>Atk : {item.atk}</p>
                                                        <p>Def : {item.def}</p>
                                                        <p>Dodge : {item.dodge}</p>
                                                        <p>Critical : {item.critical}</p>
                                                        <p>{item.infos.description}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    }
                                })()}
                            </div>
                        </div>
                        <div className="element-character">
                            {/* Image */}
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>Maxlife : {this.props.player.stats.Maxlife}</li>
                                <li>Atk : {this.props.player.stats.Atk}</li>
                                <li>Def : {this.props.player.stats.Def}</li>
                                <li>Dodge : {this.props.player.stats.Dodge / 100}%</li>
                                <li>Critical : {this.props.player.stats.Critical / 100}%</li><br />
                                <li>Xp : {this.props.player.stats.Xp} / {300 * this.props.player.stats.Level}</li>
                                <li>Level : {this.props.player.stats.Level} </li>
                            </ul>
                        </div>
                        <div className="col">
                            <p>Skills</p>
                            <ul >
                                {this.props.player.skills.map((skill, key) => <li className="small-text">{skill.Name} - Power : {skill.Power}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterStuff

