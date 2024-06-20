import { IStrike } from "./interfaces/interfaces";

function Strike({strikeClass}: IStrike) {
    return <div className={`strike ${strikeClass}`}>
        
    </div>;
}

export default Strike;