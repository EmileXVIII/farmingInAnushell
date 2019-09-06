import React, { Component } from "react";
import { directive } from "@babel/types";
import { Button, Input, Label } from 'reactstrap'

class StartRoom extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div id="StartRoom">
                <header class="container">
                    <Label for="exampleSelect">Selection du monde</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Monde 1</option>
                        <option>Monde 2</option>
                        <option>Monde 3</option>
                        <option>Monde 4</option>
                        <option>Monde 5</option>
                    </Input>
                </header>
                <div id="list-pseudo">
                    <h4>Joueur</h4>
                    <ul>
                        <li>Coco</li>
                        <li>Caca mdr</li>
                        <li>True</li>
                        <li>BouBooo</li>
                        <li>Yamine</li>
                        <li>L'Ombre</li>
                    </ul>
                    <Button>Ready</Button>
                </div>
            </div>
        )
    }
}

export default StartRoom