import React from "react";
import Board from "./board.jsx";
import * as Minesweeper from '../../minesweeper.js';
class Game extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            board: new Minesweeper.Board(9, 9) 
        }

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);

    }

    updateGame(tile, bool) {
        if (bool) {
            tile.toggleFlag();
        }
        else {
            tile.explore();
        }
        
        this.setState({ board: this.state.board });
            
        if (this.state.board.won()) {
            setTimeout( () => {
                alert('You won!');

            }, 2)
        }
        else if (this.state.board.lost()){
            setTimeout( () => {
                alert('You lost!');
                this.restartGame();
            }, 2)  
        }
    }
    
    restartGame() {
        this.setState({
            board: new Minesweeper.Board(9, 9)
        })

        
        console.log("restart", this.state)
    }

    render() { 
        // console.log("game render")
        return (

            <Board board={this.state.board} updateGame={this.updateGame} />
        )
    }

    


}

export default Game