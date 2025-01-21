import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeSlider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useContactContext } from '../../context/context.js'; 
import Map from '../Map'; 

const HomeSlider = () => {
    const { currentIndex, direction, handlePrev, handleNext, showQR, hideQR, isQRVisible } = useContactContext();

    const sections = [
        {
            id: 1,
            title: "Bienvenida",
            content: (
                <>
                    <h1>Bienvenido a SE Odontología</h1>
                    <p>Tu salud bucal, nuestra prioridad.</p>
                    <img
                        src="/images/Logos/SELogo.jpg"
                        alt="Bienvenida"
                        className="img-fluid slider-image"
                    />
                </>
            ),
        },
        {
            id: 2,
            title: "Testimonios",
            content: (
                <>
                    <h2>Sobre nosotros</h2>
                    <p className='us'>  Somos una empresa mexicana de vanguardia en el campo de la odontología, con sede en Torreón, Coahuila. Fundada hace 7 años, hemos crecido con la misión de brindar servicios dentales de la más alta calidad, adaptándonos a las necesidades de nuestras comunidades.

                                        Nuestra empresa nació de la convicción de que todos merecen acceso a una atención dental excepcional, sin importar su ubicación. En SE Odontología, nos enorgullecemos de ser pioneros en ofrecer nuestros servicios en áreas donde tradicionalmente ha sido difícil encontrarlos, permitiendo a más personas sonreír con confianza.

                                        En SE Odontología, priorizamos la atención al cliente. Sabemos que una visita al dentista puede ser una experiencia estresante para algunos, por lo que nos esforzamos en crear un ambiente cálido y acogedor. Nuestro equipo de profesionales está comprometido en proporcionar un trato personalizado y atento en cada consulta.

                                        Nuestro compromiso con la excelencia se refleja en la continua capacitación de nuestro equipo y en la utilización de tecnologías de punta. Queremos asegurarnos de que cada paciente reciba un diagnóstico preciso y un tratamiento efectivo que mejore su salud bucal y su calidad de vida.

                                        A lo largo de estos 7 años, hemos sido testigos del impacto positivo que una sonrisa saludable puede tener en la vida de las personas. Desde procedimientos rutinarios hasta tratamientos más complejos, cada caso es una oportunidad para mejorar el bienestar de nuestros pacientes y contribuir a su felicidad.

                                        Nos enorgullece ser parte de la comunidad de Torreón y estamos agradecidos por la confianza que nuestros pacientes han depositado en nosotros. Seguimos dedicados a ampliar nuestros servicios y a llegar a más personas que necesitan atención dental de calidad.

                                        En SE Odontología, cada sonrisa cuenta. ¡Gracias por permitirnos ser parte de su cuidado dental durante estos años y esperamos seguir sirviendo a nuestra comunidad con el mismo compromiso y dedicación por muchos años más!</p>         
                </>
            ),
        },
        {
            id: 3,
            title: "Encuéntranos",
            content: (
                <>
                    <h2>Encuéntranos</h2>
                    <p><strong>Horario:</strong> Lunes a Viernes, 10:00 AM - 2:00 PM y 4:00 PM - 8:00 PM </p>
                    <p><strong>Horario:</strong> Sábados, 10:00 AM - 4:00 PM </p>
                    <p><strong>Atendemos Urgencias</strong></p>
                    <p><strong>Ubicación:</strong> Calle Calz Paseo del Tecnológico 1663, Villas de la Hacienda, 27274 Torreón, Coah. México</p>
                    <Map />
                </>
            ),
        },
        {
            id: 4,
            title: "Redes Sociales",
            content: (
                <>
                    <h2>Conéctate con nosotros</h2>
                    <p>Síguenos en nuestras redes sociales:</p>
                    <span className="socials">
                        <img src='/images/Background.jpg' alt='Background' className='BackgroundImg'></img>
                        <div className="social-links">
                            <div className="social-item">
                                <a href="https://www.facebook.com/se.odontologia.16">
                                    <img src="/images/Logos/Facebook.png" alt="Logo de Facebook" className="facebook"/>
                                    <strong>Facebook</strong>
                                </a>
                            </div>
                            <div className="social-item">
                                <a href="https://www.instagram.com/seodontologia7/">
                                    <img src="/images/Logos/Instagram.png" alt="Logo de Instagram" className="instagram"/>
                                    <strong>Instagram</strong>
                                </a>
                            </div>
                            <div className="social-item" onMouseEnter={showQR} onMouseLeave={hideQR}>
                                <img src="/images/Logos/Whatsapp.png" alt="Logo de Whatsapp" className="whatsapp"/>
                                <strong onMouseEnter={showQR} onMouseLeave={hideQR}>WhatsApp</strong>
                                {isQRVisible && (
                                    <div className="qr-popup">
                                        <img src="/images/Logos/WhatsappQR.png" alt="Whatsapp QR" className="qr"/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </span>
                </>
            ),
        },
    ];

    return (
        <div className="home-slider">
            <div className="arrow arrow-left animate" onClick={handlePrev}>
                <FaChevronLeft />
            </div>
            <div className="arrow arrow-right animate" onClick={handleNext}>
                <FaChevronRight />
            </div>
            <Container>
                <div className={`slider-section ${direction}`} key={sections[currentIndex].id}>
                    {sections[currentIndex].content}
                </div>
            </Container>
        </div>
    );
};

export default HomeSlider;
