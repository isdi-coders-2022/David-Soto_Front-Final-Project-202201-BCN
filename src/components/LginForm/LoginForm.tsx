const LoginForm = () => {
  return (
    <>
      <h2>Log in</h2>
      <label htmlFor="">Username:</label>
      <input type="text" />
      <label htmlFor="">Password:</label>
      <input type="password" />
      <button>Submit</button>
      <p>
        Still not registered? <a href="">register here!</a>
      </p>
    </>
  );
};

export default LoginForm;
