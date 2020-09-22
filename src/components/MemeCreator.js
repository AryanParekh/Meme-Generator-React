import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import Image from './Image';
import axios from 'axios';

export default function MemeCreator(){
    let [meme,setMeme]=useState(null)
    let [text0,setText0]=useState('')
    let [text1,setText1]=useState('')
    let {id,box}= useParams();

    const changeHandler0=(event)=>{
        setText0(event.target.value)
    }
    const changeHandler1=(event)=>{
        setText1(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        
        var bodyFormData=new FormData();
        bodyFormData.append('template_id',id);
        bodyFormData.append('username','AryanParekh1');
        bodyFormData.append('password','aryanparekh12');
        bodyFormData.append('text0',text0);
        bodyFormData.append('text1',text1);

        axios({
            method:'POST',
            url: 'https://api.imgflip.com/caption_image',
            data: bodyFormData,
            headers: {'Content-Type':'multipart/form-data'}
        })
        .then((response)=>setMeme(response.data.data))
        .catch((error)=>console.log(error));

        
    }
    console.log(meme)
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <textarea 
                        style={txtarea}
                        width='20px'
                        name="text0" 
                        value={text0} 
                        onChange={changeHandler0}  
                        placeholder="Enter 1st text"
                    />
                </div>
                <div>
                    <textarea 
                        style={txtarea}
                        name="text1" 
                        value={text1} 
                        onChange={changeHandler1}  
                        placeholder="Enter 2nd text"
                    />
                </div>
                <button style={btn} type='submit'>Submit</button>
            </form>
            {meme===null?null:<Image url={meme.url}/>}
        </div>
    )
}

const btn={
    width: "175px",
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
    width: '175px',
    fontSize: '1.3rem',
    padding: '1rem',
    border: '0.5px solid #333',
    borderRadius: '5px',
}