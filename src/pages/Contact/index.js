import React from 'react';
import { ContactProvider } from '../../context/context';
import Contacto from '../../components/Contacto';

const Contact = () => {
    return (
        <ContactProvider>
            <Contacto />
        </ContactProvider>
    );
};

export {Contact};

