import React from 'react';
import {useParams} from 'react-router-dom';

export default function MemeCreator(){
    let {id,box}= useParams();
    console.log(id);
    console.log(box)
    return (
        <div>
            
        </div>
    )
}