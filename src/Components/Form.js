import React, { useCallback } from 'react';

const Form = ({ onSubmit, children }) => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());
    onSubmit(formData);
  }, [onSubmit]);

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
