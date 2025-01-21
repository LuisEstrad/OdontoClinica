import React from 'react';
import './Alert.css';

const Alert = ({ type, message, onClose }) => {
    const getAlertClass = () => {
        switch (type) {
            case 'success':
                return 'alert-success';
            case 'error':
                return 'alert-error';
            case 'warning':
                return 'alert-warning';
            default:
                return '';
        }
    };

    return (
        <div className={`alert ${getAlertClass()}`}>
            <span>{message}</span>
            <button className="close-button" onClick={onClose}>&times;</button>
        </div>
    );
};

export default Alert;