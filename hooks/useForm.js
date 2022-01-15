import { useState } from 'react';

function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return {
    values,
    setValues,
    handleChange
  }
}

export default useForm;
