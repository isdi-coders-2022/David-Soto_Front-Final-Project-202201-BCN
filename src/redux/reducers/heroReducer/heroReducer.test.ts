import { Hero } from "../../../components/interfaces/Hero";
import actionTypes from "../../actionTypes/actionTypes";
import heroReducer from "./heroReducer";

describe("Given a heroReducer", () => {
  describe("When it receives heroes and an action", () => {
    test("Then it should return a list of heroes updated", () => {
      const heroes = [
        {
          id: 12,
          name: "TestingHero",
          slug: "string",
          powerstats: {
            intelligence: 1,
            strength: 1,
            speed: 1,
            durability: 1,
            power: 1,
            combat: 1,
          },
          appearance: {
            gender: "no binary",
            race: "Superior Testig Race",
            height: ["1m", "1m"],
            weight: ["1m", "1m"],
            eyeColor: "Black",
            hairColor: "Rainbow",
          },
          biography: {
            fullName: "Sir Test Von Ing Hero",
            alterEgos: "test",
            aliases: ["test"],
            placeOfBirth: "jestTesting",
            firstAppearance: "In HeroCard Test",
            publisher: "DavidSoto",
            alignment: "Hopefully good enought",
          },
          work: {
            occupation: "Testing Guy",
            base: "Jest House",
          },
          connections: {
            groupAffiliation: "Jest Group",
            relatives: "Someone",
          },
          images: {
            xs: "IMG",
            sm: "IMG",
            md: "IMG",
            lg: "IMG",
          },
        },
        {
          id: 12,
          name: "TestingHero",
          slug: "string",
          powerstats: {
            intelligence: 1,
            strength: 1,
            speed: 1,
            durability: 1,
            power: 1,
            combat: 1,
          },
          appearance: {
            gender: "no binary",
            race: "Superior Testig Race",
            height: ["1m", "1m"],
            weight: ["1m", "1m"],
            eyeColor: "Black",
            hairColor: "Rainbow",
          },
          biography: {
            fullName: "Sir Test Von Ing Hero",
            alterEgos: "test",
            aliases: ["test"],
            placeOfBirth: "jestTesting",
            firstAppearance: "In HeroCard Test",
            publisher: "DavidSoto",
            alignment: "Hopefully good enought",
          },
          work: {
            occupation: "Testing Guy",
            base: "Jest House",
          },
          connections: {
            groupAffiliation: "Jest Group",
            relatives: "Someone",
          },
          images: {
            xs: "IMG",
            sm: "IMG",
            md: "IMG",
            lg: "IMG",
          },
        },
      ];

      const currentHeroes: Hero[] = [];
      const action = { type: actionTypes.loadGlobalList, heroes };

      const expectedResult = heroReducer(currentHeroes, action);

      expect(heroes).toEqual(expectedResult);
    });
  });
  describe("When it receives heroes, with a wrong action", () => {
    test("Then it should return the same heroes", () => {
      const heroes = [
        {
          id: 12,
          name: "TestingHero",
          slug: "string",
          powerstats: {
            intelligence: 1,
            strength: 1,
            speed: 1,
            durability: 1,
            power: 1,
            combat: 1,
          },
          appearance: {
            gender: "no binary",
            race: "Superior Testig Race",
            height: ["1m", "1m"],
            weight: ["1m", "1m"],
            eyeColor: "Black",
            hairColor: "Rainbow",
          },
          biography: {
            fullName: "Sir Test Von Ing Hero",
            alterEgos: "test",
            aliases: ["test"],
            placeOfBirth: "jestTesting",
            firstAppearance: "In HeroCard Test",
            publisher: "DavidSoto",
            alignment: "Hopefully good enought",
          },
          work: {
            occupation: "Testing Guy",
            base: "Jest House",
          },
          connections: {
            groupAffiliation: "Jest Group",
            relatives: "Someone",
          },
          images: {
            xs: "IMG",
            sm: "IMG",
            md: "IMG",
            lg: "IMG",
          },
        },
        {
          id: 12,
          name: "TestingHero",
          slug: "string",
          powerstats: {
            intelligence: 1,
            strength: 1,
            speed: 1,
            durability: 1,
            power: 1,
            combat: 1,
          },
          appearance: {
            gender: "no binary",
            race: "Superior Testig Race",
            height: ["1m", "1m"],
            weight: ["1m", "1m"],
            eyeColor: "Black",
            hairColor: "Rainbow",
          },
          biography: {
            fullName: "Sir Test Von Ing Hero",
            alterEgos: "test",
            aliases: ["test"],
            placeOfBirth: "jestTesting",
            firstAppearance: "In HeroCard Test",
            publisher: "DavidSoto",
            alignment: "Hopefully good enought",
          },
          work: {
            occupation: "Testing Guy",
            base: "Jest House",
          },
          connections: {
            groupAffiliation: "Jest Group",
            relatives: "Someone",
          },
          images: {
            xs: "IMG",
            sm: "IMG",
            md: "IMG",
            lg: "IMG",
          },
        },
      ];

      const currentHeroes: Hero[] = [];
      const action = { type: "something", heroes };
      const expectedResult = heroReducer(currentHeroes, action);

      expect(currentHeroes).toEqual(expectedResult);
    });
  });
});
