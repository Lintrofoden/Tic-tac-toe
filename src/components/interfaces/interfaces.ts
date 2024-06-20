export interface IBoard{
    tiles: Array<string>,
    onTileClick(index: number): void,
    playerTurn: string,
    strikeClass: string
}

export interface ITile{
    playerTurn: string,
    className?: string,
    value: string,
    onClick(): void
}

export interface IStrike{
    strikeClass: string
}

export interface IGameOver{
    hookGameState: string
}

export interface IReset{
    hookGameState: string,
    onClick(): void
}