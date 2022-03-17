import { Hero } from "../../../components/interfaces/Hero";
import { AnyAction } from "redux";
import actionTypes from "../../actionTypes/actionTypes";

const heroReducer = (
  currentHeroes: Hero[] = [],
  action: AnyAction = { type: "" }
) => {
  let newHeroes: Hero[];

  switch (action.type) {
    case actionTypes.loadGlobalList:
      newHeroes = [...action.heroes.heroes];
      break;

    case actionTypes.createHero:
      newHeroes = [...currentHeroes, action.hero];
      break;

    default:
      newHeroes = [...currentHeroes];
      break;
  }

  return newHeroes;
};

export default heroReducer;
