import React from 'react';
import './NotFound.css'; 

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <a href="/" className="home-link">Volver a la página principal</a>
            <img src='/images/Error404.png' alt='Error 404' className='img'></img>
        </div>
    );
};

export default NotFound;
