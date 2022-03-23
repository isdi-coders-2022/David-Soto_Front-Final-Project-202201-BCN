import { Hero } from "../../interfaces/Hero";
import User from "../../interfaces/User";
import {
  loadCreatedListAction,
  loadGlobalListAction,
  loginUserActions,
  registerUserActions,
} from "../actionCreators/actionCreator";
import { AppDispatch, AppThunk } from "../store";
import jwtDecode from "jwt-decode";
import CreatedHero from "../../interfaces/CreatedHero";

export const loadGlobalListThunk: AppThunk = async (
  dispatch: AppDispatch
): Promise<void> => {
  const token = localStorage.getItem("authorization");
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/hero/listAll`,
    {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    }
  );
  const HeroesList: Hero[] = await response.json();
  dispatch(loadGlobalListAction(HeroesList));
};

export const loadCreatedHeroThunk: AppThunk = async (
  dispatch: AppDispatch
): Promise<void> => {
  const token = localStorage.getItem("authorization");
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/hero/created`,
    {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    }
  );
  const createdHeroesList: CreatedHero[] = await response.json();
  dispatch(loadCreatedListAction(createdHeroesList));
};

export const loginUserThunks =
  (user: User) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("authorization");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      }
    );

    if (response.ok) {
      const tokenResponse = await response.json();
      const userResponse: User = await jwtDecode(tokenResponse.token);
      localStorage.setItem(
        "authorization",
        JSON.stringify({
          ...userResponse,
          token: tokenResponse.token,
        })
      );
      localStorage.setItem("authorization", tokenResponse.token);
      dispatch(loginUserActions(user));
    }
  };

export const registerUserThunks =
  (user: User) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("authorization");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      }
    );

    if (response.ok) {
      const tokenResponse = await response.json();
      const userResponse: User = await jwtDecode(tokenResponse.token);
      localStorage.setItem(
        "authorization",
        JSON.stringify({
          ...userResponse,
          token: tokenResponse.token,
        })
      );
      localStorage.setItem("authorization", tokenResponse.token);
      dispatch(registerUserActions(user));
    }
  };

export const createHeroThunks =
  (createdHero: CreatedHero) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("authorization");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/hero/createNew`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(createdHero),
      }
    );
    const newCreatedHero: CreatedHero[] = await response.json();
    dispatch(loadCreatedListAction(newCreatedHero));
  };

export const addFavoriteThunks =
  (hero: Hero) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("authorization");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/hero/favorite/${hero.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(hero.id),
      }
    );
    const favoriteHero: Hero[] = await response.json();
    dispatch(loadGlobalListAction(favoriteHero));
  };

export const deleteHeroThunks =
  (createdHero: CreatedHero) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("authorization");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/hero/deleteHero/${createdHero.name}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(createdHero),
      }
    );
    const newCreatedHero: CreatedHero[] = await response.json();
    dispatch(loadCreatedListAction(newCreatedHero));
  };
