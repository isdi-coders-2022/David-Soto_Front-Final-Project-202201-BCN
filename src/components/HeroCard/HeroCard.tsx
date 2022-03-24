import { Hero, Powerstats } from "../../interfaces/Hero";
import { addFavoriteThunks } from "../../redux/thunks/thunks";
import CardStyled from "../../styles/CardStyled";

interface HeroProp {
  hero: Hero;
}

const HeroCard = ({ hero }: HeroProp): JSX.Element => {
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
        <img width={100} src={hero.images.sm} alt={hero.name} />
        <div className="info_container">
          <div className="info">
            <h2>{hero.name}</h2>
            <p>Full Name: {hero.biography.fullName}</p>
            <p>Global Power: {globalPower}</p>
          </div>
          <div className="button_container">
            <button>Scann</button>
            <button
              onClick={() => {
                return addFavoriteThunks(hero);
              }}
            >
              +
            </button>
          </div>
        </div>
      </CardStyled>
    </>
  );
};

export default HeroCard;
