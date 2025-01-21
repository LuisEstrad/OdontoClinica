import React from 'react';
import { ContactProvider } from '../../context/context';
import HomeSlider from '../../components/HomeSlider';

const Home = () => {
    return (
        <ContactProvider>
            <HomeSlider />
        </ContactProvider>
    );
};

export default Home;


