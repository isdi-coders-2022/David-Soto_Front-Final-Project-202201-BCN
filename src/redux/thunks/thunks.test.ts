import {
  loadCreatedHeroThunk,
  loadGlobalListThunk,
  loginUserThunks,
} from "./thunks";

jest.mock("jwt-decode");

describe("Given a loadGlobalListThunk", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch function", async () => {
      const expectedAction = {
        heroes: {
          heroes: [
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
          ],
        },
        type: "load-global-list",
      };

      const dispatch = jest.fn();
      const getState = jest.fn();

      await loadGlobalListThunk(dispatch, getState, undefined);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a loadCreatedHeroThunk", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch function", async () => {
      const expectedAction = {
        heroes: {
          heroes: [
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
          ],
        },
        type: "load-created-list",
      };

      const dispatch = jest.fn();
      const getState = jest.fn();

      await loadCreatedHeroThunk(dispatch, getState, undefined);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a loginUserThunks", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch function", async () => {
      const expectedUser = {
        username: "name",
        password: "cryptPass",
      };

      const dispatch = jest.fn();

      const loginThunk = await loginUserThunks(expectedUser);
      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
