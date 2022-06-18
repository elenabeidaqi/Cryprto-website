import React from 'react';
import spinner from '../gif/spinner.gif';
const Loader = () => {
    return (
        <div>
        <h2 style={{textAlign:"center" , marginTop:"100px"}}>Loading...</h2>
            <img src={spinner} alt="Loading"/>
        </div>
    );
};

export default Loader;