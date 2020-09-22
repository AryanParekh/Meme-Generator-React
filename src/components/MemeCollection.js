import React, {useState,useEffect} from 'react';
import MemeTemplate from './MemeTemplate';
import Pagination from './Pagination';
import axios from 'axios';

const MemeCollection=()=>{
    const [memes,setMemes]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [memesPerPage]=useState(10);

    useEffect(()=>{
        axios.get('https://api.imgflip.com/get_memes')
        .then((response)=>{
            return setMemes(response.data.data.memes)
        })
    },[]);

    const indexOfLastMeme = currentPage* memesPerPage;
    const indexOfFirstMeme = indexOfLastMeme-memesPerPage;
    const currentMemes = memes.slice(indexOfFirstMeme,indexOfLastMeme);

    const paginate =(pageNumber)=> setCurrentPage(pageNumber);
    return (
        <div style={set}>
            <center>
            <Pagination 
                memesPerPage={memesPerPage} 
                totalMemes={memes.length} 
                paginate={paginate}
                currentPage={currentPage}>
            </Pagination>
            {currentMemes.map((meme)=>{
                return (
                    <MemeTemplate key={meme.id} meme={meme}/>
                )
            })}
            <Pagination 
                memesPerPage={memesPerPage} 
                totalMemes={memes.length} 
                paginate={paginate}
                currentPage={currentPage}>
            </Pagination>
            </center>
        </div>
    )
}

const set={
    paddingLeft:'10px',
    paddingRight:'10px',
}

export default MemeCollection