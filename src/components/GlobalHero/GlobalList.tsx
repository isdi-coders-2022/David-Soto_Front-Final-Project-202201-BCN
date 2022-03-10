import HeroCard from "../HeroCard/HeroCard";
import { Hero } from "../interfaces/Hero";

interface HeroListProps {
  heroes: Hero[];
}

const GlobalList = ({ heroes }: HeroListProps) => {
  return (
    <>
      <ul>
        {heroes.map((hero: Hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </ul>
    </>
  );
};

export default GlobalList;
