import React from 'react'

const Pagination = ({memesPerPage,totalMemes,paginate,currentPage}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalMemes/memesPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {/* <button style={btn} onClick={()=>{if(currentPage>0 && currentPage<10) return paginate(currentPage+1)}} className='page-link'>N</button> */}
                {pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                        <button 
                            style={number===currentPage?selectedBtn:btn} 
                            onClick={()=>paginate(number)} 
                            className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
                {/* <button style={btn} onClick={()=>{if(currentPage>1 && currentPage<=10) return paginate(currentPage-1)}} className='page-link'>P</button> */}
            </ul>
        </nav>
    )
}

const selectedBtn={
    padding:'6px',
    border:'2px solid blue'
}
const btn={
    padding:'6px',
}

export default Pagination
