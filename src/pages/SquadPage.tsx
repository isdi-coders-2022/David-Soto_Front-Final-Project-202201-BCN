import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserHeroList from "../components/UserHeroList/UserHeroList";
import { RootState } from "../redux/store";
import { loadCreatedHeroThunk } from "../redux/thunks/thunks";

const SquadPage = () => {
  const dispatch = useDispatch();
  const heroState = useSelector((state: RootState) => state.createdHeroReducer);

  useEffect(() => {
    dispatch(loadCreatedHeroThunk);
  }, [dispatch]);

  return (
    <>
      <h2>Your Squad</h2>
      <UserHeroList heroes={heroState}></UserHeroList>
    </>
  );
};

export default SquadPage;
