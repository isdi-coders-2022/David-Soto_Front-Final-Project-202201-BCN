import { render, screen } from "@testing-library/react";
import { Hero } from "../interfaces/Hero";
import GlobalList from "./GlobalList";

describe("Given", () => {
  describe("When", () => {
    test("Then", () => {
      const testingHeroes: Hero[] = [
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
      const expectedText: string = "Name: TestingHero";

      render(<GlobalList heroes={testingHeroes}></GlobalList>);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
