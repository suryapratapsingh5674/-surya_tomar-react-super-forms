import { useState } from 'react';
import validate from '../utils/validation';

const useForm = (initialState, validationSchema) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (validationSchema[name]) {
      const error = validate(value, validationSchema[name]);
      setErrors({ ...errors, [name]: error });
    }
  };

  return { values, errors, handleChange };
};

export default useForm;
