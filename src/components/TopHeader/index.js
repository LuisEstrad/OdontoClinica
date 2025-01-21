import React from 'react';
import './TopHeader.css';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; 

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="logo-container">
                <img src="/images/Logos/SELogo.jpg" alt="Logo" className="logo" />
            </div>
            <div className="info-container">
                <div className="info-item">
                    <FaPhoneAlt className="icon" />
                    <span>+871 145 1146</span>
                </div>
                <div className="info-item">
                    <FaMapMarkerAlt className="icon" />
                    <a href='https://www.google.com.mx/maps/place/DENTISTA/@25.5155004,-103.384859,17.67z/data=!4m6!3m5!1s0x868fdc9e4ebf3301:0x5f05754e37183270!8m2!3d25.5153165!4d-103.3851779!16s%2Fg%2F11w2_p9qm2?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D' className='location'><span>Paseo del tecnológico #1663, villas de la hda, Trn, Coah.</span></a>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
