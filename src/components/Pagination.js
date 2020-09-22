import React from 'react'

const Pagination = ({memesPerPage,totalMemes,paginate,currentPage}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalMemes/memesPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                <button onClick={()=>{if(currentPage>0 && currentPage<10) return paginate(currentPage+1)}} className='page-link'>NEXT</button>
                {pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                        <button onClick={()=>paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
                <button onClick={()=>{if(currentPage>1 && currentPage<=10) return paginate(currentPage-1)}} className='page-link'>PREVIOUS</button>
            </ul>
        </nav>
    )
}

export default Pagination
