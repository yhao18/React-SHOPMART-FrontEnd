import React from 'react'
import { Link } from 'react-router-dom';

const PaginationPart = (props) => {
    const pageNumbers = []; 
    for(let i=1; i<=Math.ceil(props.totalPost/props.postPerPage); i++){
        
        pageNumbers.push(i);
    }
    

    return (
        <nav >
            <ul className="pagination container" >
            {pageNumbers.map(number =>(
                <li key={number} className ="page-item">
                    <Link to ="#" onClick={()=>{ props.paginate(number)}} className ="page-link">{number}</Link>
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default PaginationPart
