import React from "react"; 
import Tile from "./tile.jsx";
import * as Minesweeper from '../../minesweeper.js';

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.updateGame = this.props.updateGame.bind(this)

    }

    render() {
        return (
            <div id="board-container">
                {this.props.board.grid.map( (row, index) => {
                    return (
                        <ul key={index}>  
                            {row.map( (tile, idx) => {
                                return <Tile key={idx} idx={idx} tile={tile} updateGame={this.updateGame} />
                            })}
                        </ul>)
                })
                
                    
                }

            </div>

            // <Tile/>
        )
        
    }

    
}

export default Board;