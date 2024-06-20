import { IReset } from "./interfaces/interfaces";

function Reset({hookGameState, onClick}: IReset) {
    return (hookGameState ? <button className="reset-button" onClick={() => onClick()}> 
        Reset
    </button> :
    <></>)
}

export default Reset;