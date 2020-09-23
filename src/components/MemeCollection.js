import React, {useState,useEffect} from 'react';
import MemeTemplate from './MemeTemplate';
import Pagination from './Pagination';
import LazyLoad from 'react-lazyload';

const Spinner=()=>(
    <div className="post loading">
        <h5>Loading....</h5>
    </div>
)

const MemeCollection=()=>{
    const [memes,setMemes]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [memesPerPage]=useState(10);

    useEffect(()=>{
        async function API(url){
            const baseUrl='https://api.imgflip.com/';
            const response = await fetch(baseUrl+url);
            const data=await response.json();
            return data;
        }
        API('get_memes').then(response=>setMemes(response.data.memes));
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
                    <LazyLoad key={meme.id} height={100} offset={[-100,100]} placeholder={<Spinner/>}>
                        <MemeTemplate key={meme.id} meme={meme}/>
                    </LazyLoad>
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