import { Hero } from "../../components/interfaces/Hero";
import actionTypes from "../actionTypes/actionTypes";

export const loadGlobalListAction = (heroes: Hero[]) => ({
  type: actionTypes.loadGlobalList,
  heroes,
});

export const createHeroAction = (hero: Hero) => ({
  type: actionTypes.createHero,
  hero,
});
