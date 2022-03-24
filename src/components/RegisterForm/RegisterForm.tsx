import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registerUserThunks } from "../../redux/thunks/thunks";
import User from "../../interfaces/User";
import FormStyled from "../../styles/FormStyled";

const RegisterForm = () => {
  let email;

  const blankFields: User = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      dispatch(registerUserThunks(formData));
      navigate("/global-list");
    } catch (error) {}
  };

  const changeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <FormStyled noValidate autoComplete="off" onSubmit={onSubmit}>
        <h2>Register Now</h2>
        <label htmlFor="username">Username:</label>
        <input
          autoComplete="off"
          id="username"
          type="text"
          onChange={changeData}
          value={formData.username}
        />
        <label htmlFor="password">Password:</label>
        <input
          autoComplete="off"
          id="password"
          type="password"
          onChange={changeData}
          value={formData.password}
        />
        <label htmlFor="password">Email: </label>
        <input
          autoComplete="off"
          id="email"
          type="email"
          onChange={changeData}
          value={email}
        />
        <button>Submit</button>
        <p>
          Already registered? <a href="/login">log in here!</a>
        </p>
      </FormStyled>
    </>
  );
};
export default RegisterForm;
