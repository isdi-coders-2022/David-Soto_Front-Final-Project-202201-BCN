import { Hero } from "../../components/interfaces/Hero";
import { loadGlobalListAction } from "../actionCreators/actionCreator";
import { AppDispatch, AppThunk } from "../store";

export const loadGlobalListThunk: AppThunk = async (
  dispatch: AppDispatch
): Promise<void> => {
  const response: Response = await fetch(
    `${process.env.REACT_APP_API_URL}/hero/listAll`
  );
  const HeroesList: Hero[] = await response.json();
  dispatch(loadGlobalListAction(HeroesList));
};
