import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Services } from '../pages/Services';
import { Contact } from '../pages/Contact';
import HomePage from '../pages/Home'; 
import TopHeader from '../components/TopHeader';
import {NotFound404} from '../pages/NotFound'; 
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <TopHeader /> {}
                <Header /> {}
                <Routes>
                    
                    <Route path="/" element={<HomePage />} />
                    
                    
                    <Route path="/services" element={<Services />} />
                    
                    
                    <Route path="/contact" element={<Contact />} />
                    
                    
                    <Route path="*" element={<NotFound404 />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;

