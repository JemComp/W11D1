
import React from "react";
import * as Minesweeper from "../../minesweeper.js";

class Tile extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props)
        this.tile = this.props.tile;
        this.handleClick = this.handeClick.bind(this);
    }

    
    handeClick(e) {
        

        console.log(this)
        
        e.preventDefault();
        if (e.altKey) {
            this.props.updateGame(this.props.tile, true);
        }
        else {
            this.props.updateGame(this.props.tile, false);
        }
        
    }

    render() {

        // console.log(this.props, 'I am this.props in render')
        this.symbol = "_";
        
        if (this.props.tile.explored) {
            if (this.props.tile.bombed) {
                this.symbol = "💣"
                
            }
            else {
                this.symbol = this.tile.adjacentBombCount();
                //Display number
            }
        }
        else {

            if (this.props.tile.flagged) {
                this.symbol = "🚩"
            }
            else {
                this.symbol = '_';
                //display number 
            }
        }


        
        return (
            <div onClick={this.handeClick.bind(this)} className="tile"> {this.symbol} </div>

        )
    }
}

export default Tile