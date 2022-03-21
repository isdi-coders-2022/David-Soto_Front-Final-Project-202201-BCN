import { Hero } from "../../components/interfaces/Hero";
import User from "../../components/interfaces/User";
import actionTypes from "../actionTypes/actionTypes";

export const loadGlobalListAction = (heroes: Hero[]) => ({
  type: actionTypes.loadGlobalList,
  heroes,
});

export const createHeroAction = (hero: Hero) => ({
  type: actionTypes.createHero,
  hero,
});

export const loginUserActions = (user: User) => ({
  type: actionTypes.loginUser,
  user,
});
