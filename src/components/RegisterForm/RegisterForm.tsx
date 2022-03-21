const RegisterForm = () => {
  return (
    <>
      <h2>Register Now</h2>
      <label htmlFor="">Username: </label>
      <input type="text" />
      <label htmlFor="">Password:</label>
      <input type="password" />
      <label htmlFor="">Repeat Password:</label>
      <input type="password" />
      <button>Submit</button>
    </>
  );
};
export default RegisterForm;
