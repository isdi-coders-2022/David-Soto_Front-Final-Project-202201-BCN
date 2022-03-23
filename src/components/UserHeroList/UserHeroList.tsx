import CreatedHero from "../../interfaces/CreatedHero";
import GlobalListStyle from "../../styles/GlobalListStyle";
import CreatedHeroCard from "../CreatedHeroCard/CreatedHeroCard";

interface HeroListProps {
  heroes: CreatedHero[];
}

const UserHeroList = ({ heroes }: HeroListProps) => {
  return (
    <>
      <GlobalListStyle>
        {heroes.map((hero: CreatedHero) => (
          <CreatedHeroCard key={hero.name} hero={hero} />
        ))}
      </GlobalListStyle>
    </>
  );
};

export default UserHeroList;
