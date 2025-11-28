
import useFormHook from "./hooks/useFormHook";

const LoginForm = () => {
  const { values, handleChange, handleSubmit } = useFormHook({
    email: "",
    password: ""
  });

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login</h2>

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

      <button type="submit">Login</button>
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

export default LoginForm;
