import { composeWithDevTools } from "@redux-devtools/extension";
import { AnyAction, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk, { ThunkAction } from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export default store;
