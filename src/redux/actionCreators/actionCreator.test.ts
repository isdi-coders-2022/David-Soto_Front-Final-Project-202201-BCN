import CreatedHero from "../../interfaces/CreatedHero";
import User from "../../interfaces/User";
import {
  createHeroAction,
  loadCreatedListAction,
  loadGlobalListAction,
  loginUserActions,
  registerUserActions,
} from "./actionCreator";

describe("Given a actionCreator loadGlobalListAction", () => {
  describe("When it's called with heroes", () => {
    test("Then it should return an object with type: load-global-list and heroes", () => {
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

      const expectedResult = {
        type: "load-global-list",
        heroes,
      };

      const result = loadGlobalListAction(heroes);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a actionCreator loadCreatedListAction", () => {
  describe("When it's called with heroes", () => {
    test("Then it should return an object with type: load-created-list and heroes", () => {
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

      const expectedResult = {
        type: "load-created-list",
        heroes,
      };

      const result = loadCreatedListAction(heroes);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a actionCreator createHeroAction", () => {
  describe("When it's called with hero", () => {
    test("Then it should return an object with type: load-created-list and hero", () => {
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
      const expectedResult = {
        type: "create-hero",
        hero,
      };

      const result = createHeroAction(hero);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a actionCreator loginUserActions", () => {
  describe("When it's called with user", () => {
    test("Then it should return an object with type: login-user and user", () => {
      const user: User = {
        username: "TestName",
        password: "mockpass",
      };
      const expectedResult = {
        type: "login-user",
        user,
      };

      const result = loginUserActions(user);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a actionCreator registerUserActions", () => {
  describe("When it's called with user", () => {
    test("Then it should return an object with type: register-user and user", () => {
      const user: User = {
        username: "TestName",
        password: "mockpass",
      };
      const expectedResult = {
        type: "register-user",
        user,
      };

      const result = registerUserActions(user);

      expect(result).toEqual(expectedResult);
    });
  });
});
