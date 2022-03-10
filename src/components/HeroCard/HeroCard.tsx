import { Hero, Powerstats } from "../interfaces/Hero";

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
      <img src="" alt="" />
      <h2>Name: {hero.name}</h2>
      <p>Serie: {hero.biography.fullName}</p>
      <p>Global Power: {globalPower}</p>
      <button>Scann</button>
      <button>+</button>
    </>
  );
};

export default HeroCard;
