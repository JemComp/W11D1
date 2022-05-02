import React from "react";
import ReactDOM  from "react-dom";
import Game from "./components/game.jsx";

class Root extends React.Component {

    render() {
        return (
            <Game/>
        )
    }

}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root/>, document.getElementById("root"))
})