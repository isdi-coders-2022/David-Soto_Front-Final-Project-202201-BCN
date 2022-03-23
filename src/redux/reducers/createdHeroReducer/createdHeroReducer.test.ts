import CreatedHero from "../../../interfaces/CreatedHero";
import actionTypes from "../../actionTypes/actionTypes";
import createdHeroReducer from "./createdHeroReducer";

describe("Given a createdHeroReducer", () => {
  describe("When it receives heroes and an action", () => {
    test("Then it should return a list of heroes updated", () => {
      const heroes: CreatedHero[] = [
        {
          creator: "me",
          alias: "TestingHero",
          name: "TestingHeroName",
          powerstats: {
            intelligence: 1,
            strength: 1,
            speed: 1,
            durability: 1,
            power: 1,
            combat: 1,
          },
        },
      ];

      const currentHeroes: CreatedHero[] = [];
      const action = { type: actionTypes.loadCreatedList, heroes };

      const expectedResult = createdHeroReducer(currentHeroes, action);

      expect(heroes).toEqual(expectedResult);
    });
  });
  describe("When it receives heroes, with a wrong action", () => {
    test("Then it should return the same heroes", () => {
      const heroes: CreatedHero[] = [
        {
          creator: "me",
          alias: "TestingHero",
          name: "TestingHeroName",
          powerstats: {
            intelligence: 1,
            strength: 1,
            speed: 1,
            durability: 1,
            power: 1,
            combat: 1,
          },
        },
      ];

      const currentHeroes: CreatedHero[] = [];
      const action = { type: "something", heroes };
      const expectedResult = createdHeroReducer(currentHeroes, action);

      expect(currentHeroes).toEqual(expectedResult);
    });
  });
  describe("When it receives nothing", () => {
    test("Then it should return the same heroes", () => {
      const currentHeroes: CreatedHero[] = [];
      const expectedResult = createdHeroReducer();

      expect(currentHeroes).toEqual(expectedResult);
    });
  });
  describe("When it receives hero, with an action create-hero", () => {
    test("Then it should return currentHeroes with hero", () => {
      const hero: CreatedHero = {
        creator: "me",
        alias: "TestingHero",
        name: "TestingHeroName",
        powerstats: {
          intelligence: 1,
          strength: 1,
          speed: 1,
          durability: 1,
          power: 1,
          combat: 1,
        },
      };

      const currentHeroes: CreatedHero[] = [];
      const action = { type: actionTypes.createHero, hero };
      const expectedResult = createdHeroReducer(currentHeroes, action);

      expect([hero]).toEqual(expectedResult);
    });
  });
});
