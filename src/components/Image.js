import React from 'react'

const Image = ({url}) => {
    return (
        <div>
            <h5 style={{color:'black'}}>Here is Your MEME!</h5>
            <p style={{color:'black'}}>Keep making awesome memes</p>
            <img style={{border:'2px solid black'}} src={url} alt='' height='70%' width='70%'></img>
        </div>
    )
}

export default Image
