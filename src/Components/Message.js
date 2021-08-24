import React from 'react'

function Message({winner,isXnext}) {
    
    if(winner){
        return(
            <h2 className='text-3xl animate-bounce text-center text-blue-500 font-medium'>
                Winner is {winner} !! 
            </h2>
        )
    }
    
    return (
        <h2 className='text-center font-thin text-xl'>
            Next Player is 
            {isXnext?(
                <span className='text-red-500 font-bold'> X</span>
            ):(
                <span className='text-green-500 font-bold'> O</span>
            )}
        </h2>
    )
}

export default Message
