import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const ServiceList = ({ services }) => {
    return (
        <Row>
            {services.map(service => (
                <Col key={service.id} sm={12} md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={service.imageUrl} alt={service.title} />
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>{service.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ServiceList;

