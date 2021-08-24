import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [isXnext,setIsXnext] = useState(false);
    const handleClick = (position) => {
        
        if(board[position]){
            return;
        }
        
        setBoard((prev)=>{
            return prev.map((square,pos)=>{
                if(pos === position) {
                    return isXnext ? 'X' : 'O';
                }
                return square;
            })
        })

        setIsXnext((prev)=> !prev);
    }
    const renderSquare = (position) =>{
        return <Square value={board[position]} onClick={()=>handleClick(position)}/>
    }

    return (
        <div>
            Board
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>      
            <div>
            {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>  
            <div>
            {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>              
        </div>
    )
}

export default Board
