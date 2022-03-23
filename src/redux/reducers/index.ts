import { combineReducers } from "redux";
import heroReducer from "./heroReducer/heroReducer";
import createdHeroReducer from "./createdHeroReducer/createdHeroReducer";

const rootReducer = combineReducers({
  heroReducer,
  createdHeroReducer,
});

export default rootReducer;
