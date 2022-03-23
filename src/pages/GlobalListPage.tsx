import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGlobalListThunk } from "../redux/thunks/thunks";
import GlobalList from "../components/GlobalHero/GlobalList";
import { RootState } from "../redux/store";

const GlobalListPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const heroState = useSelector((state: RootState) => state.heroReducer);

  useEffect(() => {
    dispatch(loadGlobalListThunk);
  }, [dispatch]);

  return (
    <>
      <h2>Global Hero List</h2>
      <GlobalList heroes={heroState}></GlobalList>
    </>
  );
};

export default GlobalListPage;
