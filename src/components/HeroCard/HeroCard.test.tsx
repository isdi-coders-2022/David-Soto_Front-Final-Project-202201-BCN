import { render, screen } from "@testing-library/react";
import { Hero } from "../../interfaces/Hero";
import HeroCard from "./HeroCard";

describe("Given a HeroCard component", () => {
  describe("When it's called", () => {
    test("Then it should render itself with heading 'Name: TestingHero'", () => {
      const testingHero: Hero = {
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
      };
      const expectedText: string = "TestingHero";

      render(<HeroCard hero={testingHero}></HeroCard>);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
