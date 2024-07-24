const useField = (name, formState) => {
    const { values, errors, handleChange } = formState;
    return {
      name,
      value: values[name],
      onChange: handleChange,
      error: errors[name],
    };
  };
  
  export default useField;
  