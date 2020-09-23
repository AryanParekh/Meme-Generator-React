import React from 'react'

const Pagination = ({memesPerPage,totalMemes,paginate,currentPage}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalMemes/memesPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
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
