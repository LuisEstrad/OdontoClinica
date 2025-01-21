import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [isModified, setIsModified] = useState(false);
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({ type, message });
        setTimeout(() => setAlert(null), 3000);
    };

    const resetFormData = () => {
        setFormData({ nombre: '', email: '', mensaje: '' });
        setIsModified(false);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const handlePrev = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? 3 : prevIndex - 1 
        );
    };

    const handleNext = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) =>
            prevIndex === 3 ? 0 : prevIndex + 1 
        );
    };

    const [isQRVisible, setIsQRVisible] = useState(false); 
    
    const showQR = () => { setIsQRVisible(true); }; 
    
    const hideQR = () => { setIsQRVisible(false); };

    return (
        <ContactContext.Provider
            value={{
                formData,
                setFormData,
                isModified,
                setIsModified,
                alert,
                showAlert,
                resetFormData,
                currentIndex,
                setCurrentIndex,
                direction,
                handlePrev,
                handleNext,
                isQRVisible,
                setIsQRVisible,
                showQR,
                hideQR
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};

export const useContactContext = () => useContext(ContactContext);
