import { Hero } from "../../components/interfaces/Hero";
import User from "../../components/interfaces/User";
import {
  loadGlobalListAction,
  loginUserActions,
} from "../actionCreators/actionCreator";
import { AppDispatch, AppThunk } from "../store";
import jwtDecode from "jwt-decode";

export const loadGlobalListThunk: AppThunk = async (
  dispatch: AppDispatch
): Promise<void> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/hero/listAll`
  );
  const HeroesList: Hero[] = await response.json();
  dispatch(loadGlobalListAction(HeroesList));
};

export const loginUserThunks =
  (user: User) => async (dispatch: AppDispatch) => {
    const response = await fetch(`http://localhost:6969/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    });

    if (response.ok) {
      const tokenResponse = await response.json();
      const userResponse: User = await jwtDecode(tokenResponse.token);
      localStorage.setItem(
        "token",
        JSON.stringify({
          ...userResponse,
          token: tokenResponse.token,
        })
      );
      localStorage.setItem("token", tokenResponse.token);
      dispatch(loginUserActions(user));
    }
  };
