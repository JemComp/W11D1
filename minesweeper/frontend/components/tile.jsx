
import React from "react";
import * as Minesweeper from "../../minesweeper.js";

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.tile = this.props.tile;
    }

    render() {

        
        this.symbol = "_";
        
        if (this.tile.explored) {
            if (this.tile.bombed) {
                this.symbol = "💣"
            }
            else {
                //Display number
            }
        }
        else {

            if (this.tile.flagged) {
                this.symbol = "🚩"
            }
            else {
                //display number 
            }
        }



        return (
            <div className="tile"> {this.symbol} </div>

        )
    }
}

export default Tile