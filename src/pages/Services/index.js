import React from 'react';
import { Container } from 'react-bootstrap';
import ServiceList from '../../components/ServiceList';

const services = [
    { id: 1, title: "Limpieza Dental", description: "Realizamos limpieza dental para eliminar restos y suciedad.", imageUrl: "/images/ServiceList/Limpieza.png" },
    { id: 2, title: "Blanqueamiento Dental", description: "Ofrecemos tratamientos de blanqueamiento para dientes más blancos y brillantes.", imageUrl: "/images/ServiceList/Blanqueamiento.png" },
    { id: 3, title: "Implantes Dentales", description: "Nuestros implantes dentales son una solución duradera para dientes perdidos.", imageUrl: "/images/ServiceList/Implante.png" },
    { id: 4, title: "Ortodoncia", description: "Contamos con servicio de ortodoncia para mejorar la sonrisa y salud bucal.", imageUrl: "/images/ServiceList/Ortodoncia.png" },
    { id: 5, title: "Ortopedia", description: "Contamos con tratamientos para afectaciones de mandíbula.", imageUrl: "/images/ServiceList/Ortopedia.png" },
    { id: 6, title: "Periodoncia", description: "Proporcionamos limpiezas dentales profesionales para mantener tu sonrisa saludable.", imageUrl: "/images/ServiceList/Periodoncia.png" },
    { id: 7, title: "Rehabilitación", description: "Tenemos servicios de periodoncia para condiciones que afectan los tejidos que rodean los dientes.", imageUrl: "/images/ServiceList/Rehabilitacion.png" },
    { id: 8, title: "Prótesis", description: "Realizamos prótesis dentales para mejorar la calidad del funcionamiento bucal.", imageUrl: "/images/ServiceList/Protesis.png" },
    { id: 9, title: "Endodoncia", description: "Ofrecemos servicios de endodoncia para el cuidado de la encía.", imageUrl: "/images/ServiceList/Endodoncia.png" },
    { id: 10, title: "Extracciones", description: "Realizamos extracciones dentales para el cuidado de la boca y dientes.", imageUrl: "/images/ServiceList/Extracciones.png" },
    { id: 11, title: "Cirugías", description: "Contamos con equipo y personal para llevar a cabo diversos tipos de cirugías.", imageUrl: "/images/ServiceList/Cirugia.png" },
    { id: 12, title: "Odontología Infantil", description: "Brindamos servicio de odontología enfocada en las infancias.", imageUrl: "/images/ServiceList/OdontologiaInfantil.png" },
];


const Services = () => {
    return (
        <Container>
            <h2 className="mt-4">Nuestros Servicios</h2>
            <ServiceList services={services} />
        </Container>
    );
};

export {Services}

