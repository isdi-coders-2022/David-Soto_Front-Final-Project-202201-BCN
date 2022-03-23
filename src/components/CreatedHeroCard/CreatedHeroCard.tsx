import CreatedHero from "../../interfaces/CreatedHero";
import { Powerstats } from "../../interfaces/Hero";
import CardStyled from "../../styles/CardStyled";

interface HeroProp {
  hero: CreatedHero;
}

const CreatedHeroCard = ({ hero }: HeroProp): JSX.Element => {
  const heroStats: Powerstats = hero.powerstats;

  const globalPower: number =
    heroStats.intelligence +
    heroStats.strength +
    heroStats.speed +
    heroStats.durability +
    heroStats.power +
    heroStats.combat;

  return (
    <>
      <CardStyled>
        <img width={100} src="./noHero.jpg" alt={hero.name} />
        <div className="info_container">
          <div className="info">
            <h2>{hero.name}</h2>
            <p>Full Name: {hero.name}</p>
            <p>Global Power: {globalPower}</p>
          </div>
          <div className="button_container">
            <button>Scann</button>
            <button>+</button>
          </div>
        </div>
      </CardStyled>
    </>
  );
};

export default CreatedHeroCard;
