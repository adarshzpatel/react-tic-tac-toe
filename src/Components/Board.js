import React, { useState } from 'react'
import Square from './Square'

function Board({board,handleClick,isXnext}) {
   
    const renderSquare = (position) =>{
        return <Square isXnext={isXnext} value={board[position]} onClick={()=>handleClick(position)}/>
    }

    return (
        <div className='rounded-md overflow-hidden divide-gray-700 divide-y-2 '>
            <div className='flex divide-x-2 divide-gray-900'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>      
            <div className='flex divide-x-2 divide-gray-700'>
            {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>  
            <div className='flex divide-x-2 divide-gray-700'>
            {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>              
        </div>
    )
}

export default Board
