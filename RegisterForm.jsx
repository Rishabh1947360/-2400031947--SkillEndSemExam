import useFormHook from "./hooks/useFormHook";

const RegisterForm = () => {
  const { values, handleChange, handleSubmit } = useFormHook({
    name: "",
    email: "",
    password: ""
  });

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Register</h2>

      <input
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        type="password"
      />

      <button type="submit">Register</button>
    </form>
  );
};

const styles = {
  form: {
    padding: 20,
    margin: 20,
    border: "1px solid #ccc",
    width: 250,
    borderRadius: 8
  }
};

export default RegisterForm;

