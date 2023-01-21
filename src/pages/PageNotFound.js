import React from 'react';
import ErrorImg from '../media/images/error.jpg'
const PageNotFound = () => {
    return (
        <div className='text-center'>
           <img src={ErrorImg} className="img-fluid h-50" alt='Page Not Found'/>
        </div>
    );
}

export default PageNotFound;
