import { useState, useEffect } from 'react';
import { useContactContext } from '../context/context';

const useValidations = () => {
    const { formData, setFormData } = useContactContext();
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};

        
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es obligatorio';
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre)) {
            newErrors.nombre = 'El nombre solo puede contener caracteres alfabéticos';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!/^\S+@\S+\.(com|net|org|edu|gob|mil|co|es|mx)$/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }

        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'El mensaje es obligatorio';
        } else if (formData.mensaje.length < 10) {
            newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return {
        errors,
        validateFields,
        resetForm,
    };
};

export default useValidations;