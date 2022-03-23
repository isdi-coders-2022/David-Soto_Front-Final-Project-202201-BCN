import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/hero/listAll`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        heroes: [
          {
            appearance: {
              eyeColor: "Black",
              gender: "no binary",
              hairColor: "Rainbow",
              height: ["1m", "1m"],
              race: "Superior Testig Race",
              weight: ["1m", "1m"],
            },
            biography: {
              aliases: ["test"],
              alignment: "Hopefully good enought",
              alterEgos: "test",
              firstAppearance: "In HeroCard Test",
              fullName: "Sir Test Von Ing Hero",
              placeOfBirth: "jestTesting",
              publisher: "DavidSoto",
            },
            connections: {
              groupAffiliation: "Jest Group",
              relatives: "Someone",
            },
            id: 12,
            images: {
              lg: "IMG",
              md: "IMG",
              sm: "IMG",
              xs: "IMG",
            },

            name: "TestingHero",
            powerstats: {
              combat: 1,
              durability: 1,
              intelligence: 1,
              power: 1,
              speed: 1,
              strength: 1,
            },
            slug: "string",
            work: {
              base: "Jest House",
              occupation: "Testing Guy",
            },
          },
        ],
      })
    );
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/hero/created`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        heroes: [
          {
            appearance: {
              eyeColor: "Black",
              gender: "no binary",
              hairColor: "Rainbow",
              height: ["1m", "1m"],
              race: "Superior Testig Race",
              weight: ["1m", "1m"],
            },
            biography: {
              aliases: ["test"],
              alignment: "Hopefully good enought",
              alterEgos: "test",
              firstAppearance: "In HeroCard Test",
              fullName: "Sir Test Von Ing Hero",
              placeOfBirth: "jestTesting",
              publisher: "DavidSoto",
            },
            connections: {
              groupAffiliation: "Jest Group",
              relatives: "Someone",
            },
            id: 12,
            images: {
              lg: "IMG",
              md: "IMG",
              sm: "IMG",
              xs: "IMG",
            },

            name: "TestingHero",
            powerstats: {
              combat: 1,
              durability: 1,
              intelligence: 1,
              power: 1,
              speed: 1,
              strength: 1,
            },
            slug: "string",
            work: {
              base: "Jest House",
              occupation: "Testing Guy",
            },
          },
        ],
      })
    );
  }),
  rest.post(`${process.env.REACT_APP_API_URL}/user/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tokenResponse: { token: "yfivvki" },
      })
    );
  }),
  rest.post(
    `${process.env.REACT_APP_API_URL}/user/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          tokenResponse: { token: "yfivvki" },
        })
      );
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}/hero/createNew`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          heroes: [
            {
              appearance: {
                eyeColor: "Black",
                gender: "no binary",
                hairColor: "Rainbow",
                height: ["1m", "1m"],
                race: "Superior Testig Race",
                weight: ["1m", "1m"],
              },
              biography: {
                aliases: ["test"],
                alignment: "Hopefully good enought",
                alterEgos: "test",
                firstAppearance: "In HeroCard Test",
                fullName: "Sir Test Von Ing Hero",
                placeOfBirth: "jestTesting",
                publisher: "DavidSoto",
              },
              connections: {
                groupAffiliation: "Jest Group",
                relatives: "Someone",
              },
              id: 12,
              images: {
                lg: "IMG",
                md: "IMG",
                sm: "IMG",
                xs: "IMG",
              },

              name: "TestingHero",
              powerstats: {
                combat: 1,
                durability: 1,
                intelligence: 1,
                power: 1,
                speed: 1,
                strength: 1,
              },
              slug: "string",
              work: {
                base: "Jest House",
                occupation: "Testing Guy",
              },
            },
          ],
        })
      );
    }
  ),
];
