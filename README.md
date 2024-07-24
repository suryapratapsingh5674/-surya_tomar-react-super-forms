# React Super Forms

**React Super Forms** is a powerful library designed to simplify form handling and validation in React applications.

## Installation

Install the library via npm:

```bash
npm install @surya_tomar/react-super-forms
```

## Usage

Here's a basic example to get you started:

```jsx
import React from 'react';
import { Form, FormField, useForm, useField } from '@surya_tomar/react-super-forms';

const MyForm = () => {
  const formState = useForm(
    { name: '' }, 
    { name: { required: true, minLength: 3 } }
  );
  const nameField = useField('name', formState);

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField {...nameField} label="Name" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
```

## Components

### Form

Wrapper component that handles form submission.

#### Props:

- `onSubmit` (function): Function called when the form is submitted.

```jsx
<Form onSubmit={handleSubmit}>{children}</Form>
```

### FormField

Represents an individual form field.

#### Props:

- `name` (string): Name of the form field.
- `label` (string): Label for the form field.
- `type` (string): Type of the form field input (default: 'text').
- `value` (string): Current value of the form field.
- `onChange` (function): Function called when the form field value changes.
- `error` (string): Error message for the form field.

```jsx
<FormField 
  name="name" 
  label="Name" 
  type="text" 
  value={value} 
  onChange={onChange} 
  error={error} 
/>
```

## Hooks

### useForm

Custom hook that manages form state and validation.

#### Arguments:

- `initialState` (object): Initial state of the form.
- `validationSchema` (object): Validation rules for form fields.

#### Returns:

- `values` (object): Current form values.
- `errors` (object): Current form errors.
- `handleChange` (function): Function called when a form field value changes.

```jsx
const formState = useForm(initialState, validationSchema);
```

### useField

Custom hook that provides props for a form field.

#### Arguments:

- `name` (string): Name of the form field.
- `formState` (object): Form state returned by useForm.

#### Returns:

- `name` (string): Name of the form field.
- `value` (string): Current value of the form field.
- `onChange` (function): Function called when the form field value changes.
- `error` (string): Error message for the form field.

```jsx
const fieldProps = useField(name, formState);
```

## Utilities

### Validation

Includes a utility for common validation rules.

#### Supported Rules:

- `required` (boolean): Whether the field is required.
- `minLength` (number): Minimum length of the field value.

```jsx
const validationSchema = {
  name: { required: true, minLength: 3 },
};
```

## Features

- Simple API for managing forms and form fields.
- Built-in validation rules.
- Easy integration with custom components and styles.
- Optimized for performance with minimal re-renders.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

Thanks to all contributors and users for their support and feedback.

