import CreatedHero from "../../../interfaces/CreatedHero";
import { AnyAction } from "redux";
import actionTypes from "../../actionTypes/actionTypes";

const createdHeroReducer = (
  currentHeroes: CreatedHero[] = [],
  action: AnyAction = { type: "" }
) => {
  let newHeroes: CreatedHero[];

  switch (action.type) {
    case actionTypes.loadCreatedList:
      newHeroes = [...action.heroes];
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

export default createdHeroReducer;
