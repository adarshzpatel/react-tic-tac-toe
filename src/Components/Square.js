import React from 'react'

function Square({value,onClick,isXnext}) {

    return (
        <button onClick={onClick} className={`text-4xl font-medium bg-gray-200 h-20 w-20 ${value==='O'?'text-green-500':'text-red-500'}` }>
            {value}
        </button>
    )
}

export default Square
