import { useState } from "react";

const useFormHook = (initialValues, formName) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Input Changed:", name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", values);

    // 🔔 Alert based on form name
    alert(`${formName} Successful!`);
  };

  return { values, handleChange, handleSubmit };
};

export default useFormHook;
