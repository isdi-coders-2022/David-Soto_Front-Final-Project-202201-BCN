import CreatedHero from "../../interfaces/CreatedHero";
import { Hero } from "../../interfaces/Hero";
import User from "../../interfaces/User";
import actionTypes from "../actionTypes/actionTypes";

export const loadGlobalListAction = (heroes: Hero[]) => ({
  type: actionTypes.loadGlobalList,
  heroes,
});

export const loadCreatedListAction = (heroes: CreatedHero[]) => ({
  type: actionTypes.loadCreatedList,
  heroes,
});

export const createHeroAction = (hero: CreatedHero) => ({
  type: actionTypes.createHero,
  hero,
});

export const loginUserActions = (user: User) => ({
  type: actionTypes.loginUser,
  user,
});

export const registerUserActions = (user: User) => ({
  type: actionTypes.registerUser,
  user,
});
