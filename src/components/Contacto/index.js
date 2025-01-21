import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useContactContext } from '../../context/context';
import useValidations from '../../hooks/validations';
import Alert from '../Alert';

const Contacto = () => {
    const {
        formData,
        setFormData,
        isModified,
        setIsModified,
        alert,
        showAlert,
        resetFormData,
    } = useContactContext();
    const { errors, validateFields } = useValidations();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setIsModified(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            
            showAlert('success', 'Mensaje enviado correctamente');
            resetFormData();
        } else {
            showAlert('error', 'Por favor corrige los errores antes de enviar');
        }
    };

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (isModified) {
                e.preventDefault();
                e.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isModified]);

    return (
        <Container>
            <h2 className="mt-4">Contacto</h2>

            {alert && <Alert type={alert.type} message={alert.message} onClose={() => showAlert(null)} />}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        isInvalid={!!errors.nombre}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.nombre}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Ingresa tu email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formMensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="mensaje"
                        placeholder="Escribe tu mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        isInvalid={!!errors.mensaje}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.mensaje}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};

export default Contacto;



