import React, { Component } from "react";

class Character {
    constructor(username) {
        this.stats = {
            Life: 0,
            Atk: 0,
            Def: 0,
            Dodge: 0,
            Critical: 0,
            Username: username,
        }

        this.skills = {
            Uppercut: {
                Description: null,
                Power: this.atk * 0.6,
                Roll: 0,
            },
            Kick: {
                Description: null,
                Power: this.atk * 0.8,
                Roll: 0
            }
        }
    }
}

export default Character