import Board from "./board";
import { useState, useEffect } from "react";
import { PLAYER_X, PLAYER_O, winningCombos, gameState } from "./consts/consts";
import GameOver from "./gameOver";
import Reset from "./reset";

function checkWinner(tiles: Array<string>, setStrikeClass: React.Dispatch<React.SetStateAction<string>>, setHookGameState: React.Dispatch<React.SetStateAction<string>>){
    for(const {combo, strikeClass} of winningCombos){
        if (tiles[combo[0]] !== null && tiles[combo[0]] === tiles[combo[1]] && tiles[combo[1]] === tiles[combo[2]]){
            setStrikeClass(strikeClass)
            if(tiles[combo[0]] === PLAYER_X) setHookGameState(gameState.xWins)
            else setHookGameState(gameState.oWins)
            return
        }
    }
    if(tiles.every((tile) => tile !== null)) setHookGameState(gameState.draw)
}

function TicTacToe(){

    const [tiles, setTiles] = useState<Array<string>>(Array(9).fill(null))
    const [playerTurn, setPlayerTurn] = useState<string>(PLAYER_X)
    const [strikeClass, setStrikeClass] = useState<string>('');
    const [hookGameState, setHookGameState] = useState<string>(gameState.inProgress);

    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setHookGameState )
    }, [tiles]);


    function handleReset(){
        setHookGameState(gameState.inProgress)
        setTiles(Array(9).fill(null))
        setPlayerTurn(PLAYER_X)
        setStrikeClass('')
    }

    function onTileClick(index: number){
        if(hookGameState !== gameState.inProgress)
        {
            return
        }
        //we don't want to change 'x' to '0' and '0' to 'x'
        if(tiles[index] !== null){
            return
        }
        setTiles(((prevState) => {
            const newState = [...prevState]
            newState[index] = playerTurn
            return newState
            // prevState[index] = playerTurn
            // return [...prevState]
            
        }))

        setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O: PLAYER_X)
    }

    return <div>
        <h1>Tic-tac-toe</h1>
        <Board strikeClass={strikeClass} playerTurn={playerTurn} tiles={tiles} onTileClick={onTileClick}/>
        <GameOver hookGameState={hookGameState} />
        <Reset hookGameState={hookGameState} onClick={handleReset}/>
    </div>
}

export default TicTacToe;