import React from 'react'
import NotFoundPhoto from '../../assets/notFound.jpg'
function NotFound() {
    return (
        <div className='flex items-center justify-center'>
            <img className='h-150'
                src={NotFoundPhoto}
                alt="Page not found"
            />
        </div>
    )
}

export default NotFound