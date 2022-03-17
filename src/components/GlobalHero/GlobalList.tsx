import GlobalListStyle from "../../styles/GlobalListStyle";
import HeroCard from "../HeroCard/HeroCard";
import { Hero } from "../interfaces/Hero";

interface HeroListProps {
  heroes: Hero[];
}

const GlobalList = ({ heroes }: HeroListProps) => {
  return (
    <>
      <GlobalListStyle>
        {heroes.map((hero: Hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </GlobalListStyle>
    </>
  );
};

export default GlobalList;
