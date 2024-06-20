import { ITile } from "./interfaces/interfaces";

function Tile({playerTurn, onClick, className = '', value}: ITile) {
    let hoverClass:string = ''
    if(value === null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }
    return <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
        {value}
    </div>
}

export default Tile;