import { Hero } from "../../components/interfaces/Hero";
import actionTypes from "../actionTypes/actionTypes";

export const loadGlobalListAction = (heroes: Hero[]) => ({
  type: actionTypes.loadGlobalList,
  heroes,
});
