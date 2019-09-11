import React, { Component } from "react";

class ListInventaire extends Component {

    affichage() {
        const div = document.getElementById("list-inventaire")
        // const objet = React.createElement('div', { className: "objet helmet" })
        div.innerHTML = ""
        div.React.createElement('h4', { className: "text-center" }, "Nom objet Choisi")
        for (let i = 0; i < 9; i++) {
            div.React.createElement('div', { className: "objet helmet" })
        }
    }


    // render() {
    //     return (
    //         <div>
    //             <h4 className="text-center">Nom Objet choisi</h4>
    //             <div className="objet helmet"></div>
    //             <div className="objet helmet"></div>
    //             <div className="objet helmet"></div>
    //             <div className="objet helmet"></div>
    //             <div className="objet helmet"></div>
    //             <div className="objet helmet"></div>
    //             <div className="objet helmet"></div>
    //         </div>
    //     )
    // }
}

export default ListInventaire