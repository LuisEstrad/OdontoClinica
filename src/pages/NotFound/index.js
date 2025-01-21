import React from 'react';
import { ContactProvider } from '../../context/context';
import NotFound from '../../components/NotFound';

const NotFound404 = () => {
    return (
        <ContactProvider>
            <NotFound />
        </ContactProvider>
    );
};

export {NotFound404};