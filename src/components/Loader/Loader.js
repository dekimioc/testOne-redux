import React from 'react';
import './Loader.style.scss';

const Loader = () => (
    <div className="spin-container">
        <div className="spin-content">
            <div className="loadingspinner"></div>
            <h1>Loading...</h1>
        </div >
    </div >
);

export default Loader;