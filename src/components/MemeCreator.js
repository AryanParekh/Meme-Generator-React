import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import Image from './Image';
import axios from 'axios';

export default function MemeCreator(){
    let {id,box}= useParams();
    let arr=[];
    for(let j=0;j<box;j++){
        arr.push('');
    }
    let [meme,setMeme]=useState(null);
    let [text,setText]=useState(arr);

    const changeHandler=(e,number)=>{
        const t=[...text];
        t[number]=e.target.value;
        setText(t);
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();

        const boxes=Array(box).fill(" ");
        for(let k=0;k<box;k++){
            boxes[k]={'text':text[k]}
        }
        console.log()
        
        var bodyFormData=new FormData();
        bodyFormData.append('template_id',id);
        bodyFormData.append('username','AryanParekh1');
        bodyFormData.append('password','aryanparekh12');
        for(let k=0;k<box;k++){
            bodyFormData.append(`boxes[${k}][text]`,text[k]);
        }

        axios({
            method:'POST',
            url: 'https://api.imgflip.com/caption_image',
            data: bodyFormData,
            headers: {'Content-Type':'multipart/form-data'}
        })
        .then((response)=>setMeme(response.data.data))
        .catch((error)=>console.log(error));
        
    }
    
    const textBoxNumber=[];
    for(let i=0;i<box;i++){
        textBoxNumber.push(i);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {textBoxNumber.map(number =><div key={number}>
                                                <textarea 
                                                    style={txtarea} 
                                                    width='20px' 
                                                    value={text[number]} 
                                                    onChange={e=>changeHandler(e,number)}
                                                    placeholder={"Enter text "+(number+1)}
                                                    />
                                            </div>)}
                <button style={btn} type='submit'>Submit</button>
            </form>
            {meme===null?null:<Image url={meme.url}/>}
        </div>
    )
}

const btn={
    width: "50%",
    display: 'inline-block',
    padding:'1rem 1.5rem',
    border: '1px solid black',
    borderRadius: '5px',
    fontSize: '1.5rem',
    background: '#004774',
    color: '#fff',
    marginBottom:' 2rem',
    cursor: 'pointer',
    transition: '0.25s',
}

const txtarea={
    width: '50%',
    fontSize: '1.3rem',
    padding: '1rem',
    border: '0.5px solid #333',
    borderRadius: '5px',
}