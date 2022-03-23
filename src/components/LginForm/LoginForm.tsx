import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserThunks } from "../../redux/thunks/thunks";
import User from "../../interfaces/User";

const LoginForm = () => {
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
      dispatch(loginUserThunks(formData));
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
      <form onSubmit={onSubmit}>
        <h2>Log in</h2>
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
        <button>Submit</button>
        <p>
          Still not registered? <a href="/register">register here!</a>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
