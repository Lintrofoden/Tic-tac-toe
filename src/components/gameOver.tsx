import React from "react";
import {IGameOver} from './/interfaces/interfaces'
function GameOver({hookGameState}: IGameOver) {
    return (hookGameState ? <div className="game-over">
    {hookGameState}
</div> : <></>)
    // return <div></div>
    // return ( <div className="game-over">
    //         {hookGameState}
    //     </div> );
    
}

export default GameOver;