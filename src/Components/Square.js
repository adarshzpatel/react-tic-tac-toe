import React from 'react'

function Square({value,onClick,isWinningSquare}) {

    return (
        <button onClick={onClick} className={`text-4xl font-medium ${isWinningSquare?'bg-green-300 ':''} h-20 w-20 ${value==='O'?'text-green-500':'text-red-500'}` }>
            {value}
        </button>
    )
}

export default Square
