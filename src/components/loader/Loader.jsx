import React from 'react';
import { FadeLoader } from 'react-spinners';
import './loader.css'

const Loader = () =>{
    return (
        <div className='loading'>
            <FadeLoader/>
        </div>
    )
}

export default Loader